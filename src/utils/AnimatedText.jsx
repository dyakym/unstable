import { useEffect, useState, useRef } from "react";
import styles from "./AnimatedText.module.scss";

export const AnimatedText = ({ text, delayMultiplier = 0.05 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <span ref={textRef}>
      {text.split(" ").map((letter, index) => (
        <span
          key={index}
          className={`${styles.letter} ${isVisible ? styles.visible : ""}`}
          style={{ animationDelay: `${index * delayMultiplier}` }}
        >
          {letter}
          &nbsp;
        </span>
      ))}
    </span>
  );
};
