import logoSmall from "/icon/small-emblem.svg";
import logoMedium from "/icon/medium-emblem.svg";
import logoLarge from "/icon/big-emblem.svg";
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer className="flex w-full h-full text-white pb-14 md:pb-9 xl:pb-[3.125rem] bg-gradient-to-t from-[#9585D2] to-[rgba(255,255,255,0)]">
      <div className="ml-5 md:ml-[2.875rem] xl:ml-[4.375rem] mt-[0.188rem] md:mt-5 xl:mt-[2.813rem]  mr-[3.125rem] xl:mr-[3.938rem]">
        <picture className="">
          <source srcSet={logoLarge} media="(min-width: 1600px)" />

          <source srcSet={logoMedium} media="(min-width: 768px)" />

          <img src={logoSmall} alt="unstable-logo" className="h-auto" />
        </picture>
      </div>

      <div className="flex justify-center items-center w-full max-md:flex-col max-md:max-w-[calc(100%-160px)]">
        <div className="flex flex-col w-full justify-between md:flex-row px-6 md:px-8 xl:pl-[5.5rem] xl:pr-[12.5rem]">
          <div className="flex justify-center gap-[3.563rem] xl:gap-[11.563rem] pt-[0.438rem] md:pt-[1.625rem] xl:pt-[2.813rem]">
            <ul className="space-y-[1.813rem]">
              <li>
                <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-6px]">Pricing</a>
              </li>
              <li>
                <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-6px]">Careers</a>
              </li>
              <li>
                <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-6px]">Blogs</a>
              </li>
            </ul>

            <ul className="md:mr-[2.938rem] xl:mr-[19.375rem] space-y-[1.813rem]">
              <li>
                <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-6px]">Genie</a>
              </li>
              <li>
                <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-6px]">Capture</a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center relative md:pt-[1.188rem] xl:pt-[2.375rem] max-md:pt-12">
            <div className="max-md:hidden before:content-[''] before:block before:w-[50px] before:h-[120px] before:mr-6 xl:before:mr-[4.125rem] before:bg-[url('/icon/big-footer-line.svg')] before:bg-cover before:bg-no-repeat"></div>

            <div className="space-y-[1.375rem]">
              <a href="https://x.com/unstableml" className={`${styles.iconTwitter} flex gap-[0.938rem]`}>
                <span className={styles.icon}></span>
                <p>.Twitter</p>
              </a>

              <a href="https://discord.com/invite/ecCZYK2t65" className={`${styles.iconDiscord} flex gap-[0.938rem]`}>
                <span className={styles.icon}></span>
                <p>.Discord</p>
              </a>

              <a href="https://www.instagram.com/unstableml/" className={`${styles.iconInstagram} flex gap-[0.938rem]`}>
                <span className={styles.icon}></span>
                <p>.Instagram</p>
              </a>  
            </div>
          </div>
        </div>

        <div className="md:pl-8 xl:pl-10 md:pt-[1.688rem] xl:pt-[2.875rem] max-md:pt-12 flex flex-col mr-1 xl:mr-[5.25rem] whitespace-nowrap footer-small">
          <div className="flex max-md:gap-5 mb-[4.375rem] md:flex-col md:space-y-4">
            <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-5px]">Terms of Service</a>
            <a href="#" className="w-min relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 after:bottom-[-5px]">Privacy policy</a>
          </div>
          <div className="">
            <p>© 2024 UnstableML.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
