import { AnimatedText } from "../../utils/AnimatedText";
import styles from "./Soundscape.module.scss";

export const Soundscape = () => {
  const text = "Create videos packed with";
  const strongText = "synchronized audio";
  const paragraph =
    "Effortlessly create stunning videos with perfectly synchronized audio. Our cutting-edge audio diffusion model ensures high quality sound with every generation, regardless of the video model you choose.";

  return (
    <section className="relative flex flex-row items-center min-h-screen">
      <img
        src="/images/bg/08.png"
        className="absolute right-0 md:right-[-10px]"
        alt="background"
      />
      <div className="absolute z-40 pl-[29px] md:pl-[21px] xl:pl-[50px] pt-[500px] pb-[61px] md:pt-[77px] md:pb-[93px] xl:pt-[91px]">
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
              src="/videos/soundscape/vid1.mp4"
              className="flex-shrink-0 w-[383px] h-[240px] ml-[2.438rem] mr-12 object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <div className="text-white pb-[3.25rem] min-w-[515px] max-h-[240px]">
              <h3 className={`heading-h3 pb-9 max-w-[529px] ${styles.heading}`}>
                <AnimatedText text={text} />

                <span className="strong-h3">
                  <AnimatedText text={strongText} />
                </span>
              </h3>

              <p className="paragraph-p1 ml-[3.125rem] max-w-[26.375rem]">
                <AnimatedText text={paragraph} />
              </p>
            </div>
          </div>

          <div className="flex gap-2.5">
            <video
              src="/videos/soundscape/vid2.mp4"
              className="flex-shrink-0 w-[461px] h-[280px] 2xl:min-w-[461px] ml-auto object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <video
              src="/videos/soundscape/vid3.mp4"
              className="flex-shrink-0 w-[579px] h-[280px] 2xl:min-w-[579px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="flex gap-2.5">
            <video
              src="/videos/soundscape/vid4.mp4"
              className="flex-shrink-0 w-[421px] h-[211px] ml-[80px] object-cover rounded-[8px]"
              autoPlay
              loop
              muted
            />

            <video
              src="/videos/soundscape/vid5.mp4"
              className="flex-shrink-0 w-[383px] h-[252px] object-cover rounded-[8px]"
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
          </h3>

          <p className="paragraph-p1 md:ml-[3.125rem] max-w-[25.5rem]">
            <AnimatedText text={paragraph} />
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-3 md:gap-[1.375rem] px-4 z-20">
          <video
            src="/videos/soundscape/vid1.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/soundscape/vid2.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/soundscape/vid3.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/soundscape/vid4.mp4"
            className="flex-shrink-0 h-[164px] w-[323px] md:w-[617px] md:h-[312px] object-cover rounded-[8px]"
            autoPlay
            loop
            muted
          />

          <video
            src="/videos/soundscape/vid5.mp4"
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
