import React, { useEffect, useState } from "react";
import styles from "./CircleProgress.module.scss";
import ScrollIcon from "/icon/scroll-icon.svg";

export const CircleProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsHidden(true);
          setIsCompleted(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const radius = 8;
  const center = 8;
  const angle = (progress / 100) * 360;
  const radians = (angle - 90) * (Math.PI / 180);
  const x = center + radius * Math.cos(radians);
  const y = center + radius * Math.sin(radians);
  const largeArc = progress > 50 ? 1 : 0;

  const pathData = `
    M ${center} ${center}
    L ${center} 0
    A ${radius} ${radius} 0 ${largeArc} 1 ${x} ${y}
    Z
  `;

  return (
    <>
      {!isHidden && (
        <svg
          width="16"
          height="16"
          className="absolute bottom-[44px] md:bottom-[56px] xl:bottom-[32px]"
        >
          <circle cx="8" cy="8" r="8" fill="rgba(255, 255, 255, 0.3)" />

          {progress > 0 && <path d={pathData} fill="white" />}
        </svg>
      )}

      {isCompleted && (
        <div className="absolute bottom-[44px] md:bottom-[56px] xl:bottom-[32px] flex flex-col items-center justify-center gap-5">
          <img src={ScrollIcon} alt="Scroll Icon" className={`${styles.pulseIcon} w-[32px] h-[35px]`} />
          <span className="text-white font-Satoshi font-medium text-base">
            Scroll to explore
          </span>
        </div>
      )}
    </>
  );
};
