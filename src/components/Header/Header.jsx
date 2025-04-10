import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '../../ui/Button/Button';
import logo from '/icon/logo.svg';
import image from '/images/unstable.png';
import styles from './Header.module.scss';

export const Header = () => {

  useGSAP(() => {
    const headerVisible = gsap
      .from('.header-visible', {
        yPercent: -100,
        duration: 0.3,
      })
      .progress(1);
    ScrollTrigger.create({
      start: 'top top',
      onUpdate: (self) => {
        self.direction === -1 ? headerVisible.play() : headerVisible.reverse();
      },
    });
  });

  return (
    <header className="fixed w-full z-50 header-visible">
      <div className='flex justify-between items-center px-5 py-[1.125rem] xl:px-[3.75rem] xl:py-[1.75rem]'>
        <div className='flex items-center'>
          <a href="/" >
            <img src={logo} alt="Logo" className=''/>
          </a>

          <img src={image} alt="Image" className='pl-2.5 max-xl:hidden' />

          <p className='header-version text-white pl-10 lg:pl-[8.75rem] xl:pl-[4.625rem]'>V.4.26</p>
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col items-center'>
            <div className="fixed top-0 right-[10.5rem] lg:right-[12.75rem] xl:right-[18.938rem] flex flex-col items-center group">

              <div className='w-px h-[2.875rem] bg-white/40 group-hover:h-[2.313rem]'></div>

              <div className='h-3 w-3 bg-white rounded-full flex justify-center items-center text-transparent transition-all duration-300 hover:h-7 hover:w-7 hover:bg-transparent hover:text-white hover:border hover:border-solid hover:border-white/40'>АІ</div>
            </div>
          </div>

          <Button type="header" text='Try now'/>
        </div>
      </div>
    </header>
  )
}