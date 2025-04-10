import React from "react";
import styles from "./Portal.module.scss";

export const Portal = () => {
  const leftVideos = [1, 2, 3];
  const rightVideos = [4, 5, 6];

  return (
    <div className={`absolute w-full min-h-screen overflow-hidden`}>
      <div
        className={`${styles.wrapper} flex justify-between items-center h-screen`}
      >

        <div
          className={`${styles.leftSide} flex justify-center items-center `}
        >
          <div className="flex gap-3 overflow-hidden w-full relative">
            <div className={`${styles.animationLeft} flex gap-3 w-max`}>
              {leftVideos.map((index, i) => (
                  <video
                    key={`left-${index}`}
                    className={`w-[286px] h-[190px] md:w-[500px] md:h-[350px]`}
                    style={{ animationDelay: `${i * 1}s` }}
                    autoPlay
                    loop
                    muted
                    src={`/videos/hero/video${index}.mp4`}
                  />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${styles.rightSide} flex justify-center items-center `}
        >
          <div className="flex gap-3 overflow-hidden w-full relative">
            <div className={`${styles.animationRight} flex gap-3 w-max`}>
              {rightVideos.map((index, i) => (

                  <video
                    key={`right-${index}`}
                    className={`w-[286px] h-[190px] md:w-[500px] md:h-[350px] `}
                    style={{ animationDelay: `${i * 1}s` }}
                    autoPlay
                    loop
                    muted
                    src={`/videos/hero/video${index}.mp4`}
                  />

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
