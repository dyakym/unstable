  import { useEffect, useRef } from "react";
  import { useGSAP } from "@gsap/react";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import styles from "./Category.module.scss";

  gsap.registerPlugin(ScrollTrigger);

  export const Category = () => {
    const categoriesRef = useRef(null);
    const sectionRef = useRef(null);
   // const videoRef = useRef(null);
    

    useEffect(() => {
      const categories = categoriesRef.current;
      const section = sectionRef.current;
      // const videoBlock = videoRef.current;

      function getScrollAmount() {
        const spaceAmount = 3;
        const gap = 80;
        const spaceWidth = spaceAmount + gap;
        const categoriesWidth = categories.scrollWidth + spaceWidth;
        return -(categoriesWidth * 2);
      }

      const tween = gsap.to(categories, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);

    return (
      <>
        <section
          ref={sectionRef}
          className="relative min-h-screen overflow-hidden flex justify-center items-center"
        >
            <div className={` ${styles.section}`}>
              <div ref={categoriesRef} className={`${styles.categories}`}>
                <h2>Category 1</h2>
                <h2>Category 2</h2>
                <h2>Category 3</h2>
                <h2>Category 4</h2>
              </div>
            </div>
        </section>
      </>
    );
  };
