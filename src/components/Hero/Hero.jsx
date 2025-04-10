import { useEffect, useState } from "react";
import { AnimatedText } from "../../utils/AnimatedText";
import { Preloader } from "../Preloader/Preloader";
import { Portal } from "../Portal/Portal";
import { CircleProgress } from "../../ui/CircleProgress/CircleProgress";

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  const text = "Home of";
  const strongText = "Dreamers";
  const extraText = "2025";
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/hero/Unstable_Hero_cycle_mob.mp4"
          type="video/mp4"
          media="(max-width:769px)"
        />
        <source
          src="/videos/hero/Unstable_Hero_cycle_tablet.mp4"
          type="video/mp4"
          media="(max-width:1440px)"
        />

        <source
          src="/videos/hero/Unstable_Hero_cycle_desk.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 text-white text-center pt-[124px] md:pt-[154px] xl:pt-[90px] max-w-[335px] md:max-w-[520px] xl:max-w-[600px]">
        <p className="ml-[7.188rem] md:ml-[12rem] xl:ml-[15.375rem] w-min text-xl italic font-medium">
          <AnimatedText text={extraText} />
        </p>
        <h1 className="font-Satoshi text-[65px] md:text-[100px] xl:text-[110px] font-medium max-xl:leading-[0.9] xl:leading-[1] tracking-[-0.04em] md:tracking-[-0.04em]">
          <AnimatedText text={text} />

          <span className="relative after:absolute after:top-1/2 after:ml-[0.875rem] xl:after:ml-[3.75rem] after:w-[50px] md:after:w-[64px] xl:after:w-[128px] after:h-px md:after:h-[2px] after:bg-[url('/icon/title-line.svg')] after:bg-cover after:bg-no-repeat"></span>

          <span className="font-PlayfairDisplay font-semibold text-[65px] md:text-[100px] xl:text-[110px] leading-[1] itaclic pl-[3.125rem] md:pl-[4.875rem] xl:pl-[6.813rem]">
            <AnimatedText text={strongText} />
          </span>
        </h1>
      </div>
      <Portal />
      <CircleProgress />
    </section>
  );
};
