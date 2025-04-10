import { AnimatedText } from "../../utils/AnimatedText";
import styles from "./Enhance.module.scss";

export const Enhance = () => {
  const text = "Transform";
  const strongText = "Your Videos";
  const secondText = "Like Never Before";
  const paragraph =
    "Bring your own videos and completely transform them. Whether it's changing a background or replacing objects, our advanced video generation model, Dream, lets you create stunning transformations with ease.";

  return (
    <section className="relative flex flex-row items-center min-h-screen">
      <div className="absolute z-40 pl-[29px] md:pl-[21px] xl:pl-[50px] pt-[52px] pb-[61px] md:pt-[77px] md:pb-[93px] xl:pt-[91px] xl:pb-[152px]">
        <div className={styles.maskWrapper}>
          <video
            src="/videos/water.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.maskedVideo}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-8 z-20 max-w-[1024px] mx-auto max-xl:hidden">
        <div className="flex gap-2.5 flex-col gap-4 px-4 z-20">
          <div className="flex gap-2.5">
            <video
              src="/videos/enhance/enhance1.mov"
              className="flex-shrink-0 w-[343px] h-[194px] ml-[226px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <video
              src="/videos/enhance/enhance2.mov"
              className="flex-shrink-0 w-[226px] h-[194px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="flex gap-2.5">
            <video
              src="/videos/enhance/enhance3.mov"
              className="flex-shrink-0 w-[539px] h-[280px] 2xl:min-w-[461px] ml-auto object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <video
              src="/videos/enhance/enhance4.mov"
              className="flex-shrink-0 w-[540px] h-[280px] 2xl:min-w-[579px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="flex gap-2.5">
            <div className="text-white pt-[2.875rem] mr-[5.25rem] min-w-[515px] max-h-[240px]">
              <h3 className={`heading-h3 pb-9 max-w-[500px] ${styles.heading}`}>
                <AnimatedText text={text} />

                <span className="strong-h3">
                  <AnimatedText text={strongText} />
                </span>
                <AnimatedText text={secondText} />
              </h3>

              <p className="paragraph-p1 ml-[3.125rem] max-w-[26.375rem]">
                <AnimatedText text={paragraph} />
              </p>
            </div>

            <video
              src="/videos/enhance/enhance5.mov"
              className="flex-shrink-0 w-[460px] h-[252px] object-cover rounded-[8px] object-[50%_70%]"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 z-20 xl:hidden">
        <div className="text-white mb-4 pl-5 md:pl-[12.188rem] pb-[5.375rem] md:pb-[3.5rem]">
          <h3
            className={`heading-h3 pb-9 max-w-[335px] md:max-w-[454px] ${styles.heading}`}
          >
            <AnimatedText text={text} />

            <span className="strong-h3 max-w-[284px] md:max-w-[415px]">
              <AnimatedText text={strongText} />
            </span>

            <AnimatedText text={secondText} />
          </h3>

          <p className="paragraph-p1 md:ml-[3.125rem] max-w-[25.5rem]">
            <AnimatedText text={paragraph} />
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-3 md:gap-[1.375rem] px-4 z-20">
          <video
            src="/videos/enhance/enhance1.mov"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/enhance/enhance2.mov"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/enhance/enhance3.mov"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/enhance/enhance4.mov"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/enhance/enhance5.mov"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px] object-[50%_70%]"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};
