import { useState, useEffect } from "react";
import styles from "././Preloader.module.scss";
import logoSmall from "/icon/small-emblem.svg";
import logoMedium from "/icon/medium-emblem.svg";
import logoLarge from "/icon/big-emblem.svg";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          document.body.style.overflow = '';
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className={`${styles.bg} h-screen w-full fixed z-50 overflow-hidden`}>
      <div className="absolute top-8 left-1/2 md:top-1/2 md:left-[57px] xl:left-[100px] transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2">
        <picture>
          <source srcSet={logoLarge} media="(min-width: 1600px)" />
          <source srcSet={logoMedium} media="(min-width: 768px)" />
          <img
            src={logoSmall}
            alt="unstable-logo"
            className="h-auto w-[80px] md:w-[100px]"
          />
        </picture>
      </div>

      <div className="h-full flex flex-col justify-between px-6 md:px-[57px] xl:px-[100px] py-8">
        <div className="flex flex-col md:hidden flex-1 justify-center items-center">
          <p
            className="relative text-white pl-5 font-Satoshi text-[16px] tracking-[-0.02em] font-bold 
      before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 
      before:w-[14px] before:h-[14px] before:bg-[url('/icon/circle.svg')] 
      before:bg-cover before:bg-no-repeat"
          >
            Creation of the Luniverse...
          </p>
        </div>

        <div className="md:hidden flex flex-col items-center gap-3">
          <span className="text-white text-9xl">{progress}</span>
          <div className="w-full h-[2px] bg-white/20">
            <div
              className="h-full bg-white transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="hidden md:flex justify-between items-end w-full flex-1">
          <p
            className="relative text-white pl-5 font-Satoshi text-[16px] tracking-[-0.02em] font-bold 
      before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 
      before:w-[14px] before:h-[14px] before:bg-[url('/icon/circle.svg')] 
      before:bg-cover before:bg-no-repeat"
          >
            Creation of the Luniverse...
          </p>

          <div className="flex flex-col items-end gap-3">
            <span className="text-white text-9xl">{progress}</span>
            <div className="w-[285px] lg:w-[304px] h-[2px] bg-white/20">
              <div
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
