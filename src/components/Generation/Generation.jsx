import { AnimatedText } from "../../utils/AnimatedText";
import styles from "./Generation.module.scss";

export const Generation = () => {
  const text = "Transform Your";
  const strongText = "Media";
  const paragraph =
    "Turn any media, whether it be text or images, into stunning videos. From storytelling to content creation, the possibilities are endless.";

  return (
    <section className="relative flex flex-row items-center min-h-screen">
      <div className="absolute z-40 pl-[26px] md:pl-[21px] xl:pl-[50px] pt-[380px] pb-[61px] md:pt-[77px] md:pb-[93px] xl:pt-[91px] xl:pb-[152px]">
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
              src="/videos/generation/hortizontal_1.mp4"
              className="flex-shrink-0 w-[343px] h-[193px] ml-auto object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <video
              src="/videos/generation/horizontal_2.mp4"
              className="flex-shrink-0 w-[343px] h-[193px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="flex gap-2.5">
            <video
              src="/videos/generation/horizontal_3.mp4"
              className="flex-shrink-0 w-[538px] h-[280px] ml-auto object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <video
              src="/videos/generation/horizontal_4.mp4"
              className="flex-shrink-0 w-[538px] h-[280px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="flex gap-2.5">
            <div className="text-white mt-[2.875rem] ml-[2.438rem]">
              <h3 className={`heading-h3 pb-9 max-w-[275px] ${styles.heading}`}>
                <AnimatedText text={text} />

                <span className="strong-h3">
                  <AnimatedText text={strongText} />
                </span>
              </h3>

              <p className="paragraph-p1 ml-[3.125rem] min-w-[21.438rem]">
                <AnimatedText text={paragraph} />
              </p>
            </div>

            <video
              src="/videos/generation/horizontal_6.mp4"
              className="flex-shrink-0 w-[382px] h-[252px] ml-[11.625rem] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 z-20 xl:hidden">
        <div className="text-white mb-4 pl-5 md:pl-[12.188rem] pb-[5.375rem] md:pb-[3.5rem]">
          <h3 className={`heading-h3 pb-9 max-w-[275px] ${styles.heading}`}>
            <AnimatedText text={text} />

            <span className="strong-h3">
              <AnimatedText text={strongText} />
            </span>
          </h3>
          <p className="paragraph-p1 md:ml-[3.125rem] max-w-[20.938rem]">
            <AnimatedText text={paragraph} />
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-3 md:gap-[1.375rem] px-4 z-20">
          <video
            src="/videos/generation/hortizontal_1.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/generation/horizontal_2.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/generation/horizontal_3.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/generation/horizontal_4.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/generation/horizontal_6.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};
