import styles from "././HoldUp.module.scss";
import { Button } from "../../ui/Button/Button";
import { AnimatedText } from "../../utils/AnimatedText";

export const HoldUp = () => {
  const text = "What’s the"
  const strongText = "Hold-up?"
  return (
    <section className="min-h-screen max-w-[1600px] mx-auto pt-5 md:pt-[40px] xl:pt-[63px] pb-[42px] md:pb-[46px] px-5 xl:pb-[80px] xl:px-[60px]">
      <div className={`${styles.bg} relative  rounded-2xl overflow-hidden h-[80vh] max-md:mx-7 z-40`}>
        <div className="flex flex-col justify-center items-center h-full mx-auto px-6 text-white">
          <h2 className="max-w-[320px] md:max-w-[550px] xl:max-w-[700px] font-Satoshi text-[65px] md:text-[100px] leading-[1] xl:text-[110px] font-medium tracking-[-0.04em] pb-[80px] md:pb-[100px] xl:pb-24">
            <AnimatedText text={text} />

            <span className="relative after:absolute after:top-1/2 after:ml-[0.875rem] xl:after:ml-[5.188rem] after:w-[50px] md:after:w-[64px] xl:after:w-[128px] after:h-px md:after:h-[2px] after:bg-[url('/icon/title-line.svg')] after:bg-cover after:bg-no-repeat"></span>

            <span className="font-PlayfairDisplay font-semibold text-[65px] md:text-[100px] xl:text-[110px] leading-[1] itaclic md:pl-[4.875rem] xl:pl-[6.813rem]">
              <AnimatedText text={strongText} />
            </span>
          </h2>

          <Button type="try" text="Try Dream" />
        </div>
      </div>
    </section>
  );
};
