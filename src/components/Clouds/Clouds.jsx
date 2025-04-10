import { useRef } from "react";
import { Button } from "../../ui/Button/Button";
import { AnimatedText } from "../../utils/AnimatedText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Clouds.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const Clouds = () => {
  const text = "Turn dreams Into";
  const strongText = "reality";
  const subtitle_first = "All your favorite";
  const subtitle_second = "video generation models in one place.";
  const strongSubtitle = "AI-powered";
  const paragraph =
    "Explore our exclusive collection of cutting-edge models, each uniquely crafted to bring your vision to life and transform your text into breathtaking videos.";
  const extraText = "AI Video Magic";

  const cloudRightRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const mm = gsap.matchMedia();
  
    mm.add({
      isDesktop: "(min-width: 1440px)",
      isTablet: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop, isTablet, isMobile } = context.conditions;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skyTrigger",
          start: "bottom 30%",
        },
      });
  
      if (isDesktop) {
        tl.fromTo(
          cloudLeftRef.current,
          { x: "150vw", opacity: 0 },
          { x: "60%", opacity: 1, duration: 1.6, ease: "power2.out" }
        );
  
        tl.fromTo(
          cloudRightRef.current,
          { x: "-150vw", opacity: 0 },
          { x: "-40%", opacity: 1, duration: 1.6, ease: "power2.out" },
          ">-0.3"
        );
      } else if (isTablet) {
        tl.fromTo(
          cloudLeftRef.current,
          { x: "150vw", opacity: 0 },
          { x: "75%", opacity: 1, duration: 1.6, ease: "power2.out" }
        );
  
        tl.fromTo(
          cloudRightRef.current,
          { x: "-150vw", opacity: 0 },
          { x: "-60%", opacity: 1, duration: 1.6, ease: "power2.out" },
          ">-0.3"
        );
      } else if (isMobile) {
        tl.fromTo(
          cloudLeftRef.current,
          { x: "150vw", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.6, ease: "power2.out" }
        );
  
        tl.fromTo(
          cloudRightRef.current,
          { x: "-150vw", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.6, ease: "power2.out" },
          ">-0.3"
        );
      }
  
      tl.add(() => {
        gsap.to(cloudRightRef.current, {
          x: '+=20',
          y: '-=20',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
  
        gsap.to(cloudLeftRef.current, {
          x: '-=20',
          y: '-=20',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="skyTrigger min-h-screen relative overflow-hidden bg-gradient-to-b from-[#9585D2] to-[rgba(255,255,255,0)]">
      <div className="flex flex-col justify-center items-center px-8 xl:px-0 mx-auto z-20 xl:max-w-[1100px] pb-[250px] md:pb-[150px] xl:pb-[120px]">
        <div className="text-white max-md:text-left md:pl-14 xl:pl-1 pt-[391px] md:pt-[200px] xl:pt-[180px] max-w-[340px] md:max-w-[600px]">
          <p className="extra-h2 text-right xl:italic xl:font-medium font-bold max-xl:tracking-[-0.02em]">
            <AnimatedText text={extraText} />
          </p>

          <h2 className="font-Satoshi text-5xl md:text-[100px] font-medium md:leading-[0.9] tracking-[-0.02em] md:tracking-[-0.04em]">
            <AnimatedText text={text} />

            <span className="font-PlayfairDisplay itaclic inline-flex items-center relative">
              <AnimatedText text={strongText} />

              <span className="after:absolute font-semibold text-5xl md:text-[100px] after:top-2/3 after:ml-9 after:w-[80px] md:after:w-[107px] xl:after:w-[147px] after:h-[2px] after:bg-[url('/icon/title-line.svg')] after:bg-cover after:bg-no-repeat"></span>
            </span>
          </h2>
        </div>

        <img
          ref={cloudLeftRef}
          src="/images/clouds/cloud_1.png"
          alt="cloud"
          className={`z-40 ${styles.cloudsRight}`}
        />

        <img
           ref={cloudRightRef}
          src="/images/clouds/cloud_2.png"
          alt="cloud"
          className={`z-40 ${styles.cloudsLeft}`}
        />

        <div className="text-white mt-8 md:mt-[146px] xl:mt-[196px] md:ml-[318px] xl:ml-[473px] w-[340px] md:w-[410px] xl:w-[500px]">
          <p className="font-Satoshi text-[2rem] font-bold tracking-[-0.02em] leading-[1.2] mb-10">
            <AnimatedText text={subtitle_first} />
            <span className="font-PlayfairDisplay italic">
              <AnimatedText text={strongSubtitle} />
            </span>
            <AnimatedText text={subtitle_second} />
          </p>

          <p className="font-Satoshi text-[1.25rem] font-bold tracking-[-0.01em] leading-[1.2] xl:mr-[4.625rem] mb-9 md:mb-12 hyphens-auto">
            <AnimatedText text={paragraph} />
          </p>

          <div className="max-md:flex max-md:justify-center md:ml-[4.625rem]">
            <Button type="free" text="Try now for free" />
          </div>
        </div>
      </div>
    </section>
  );
};
