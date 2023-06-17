import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./reveal.css"

const TextReveal = () => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [
      lettersRef,
      (ref, index) => ref && (lettersRef.current[index] = ref),
    ];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Bridging sectors, disciplines, and stakeholders for a digital and inclusive future.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 60%",
        end: "bottom 60%",
      },
      color: "#F96C96",
      duration: 0.2,
      stagger: 2,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <div className="w-full hidden md:flex justify-center">
      <div className="w-full max-w-[1366px] p-20 bg-white reveal">
        <div ref={triggerRef} className="w-2/3 bg-white">
          {text.split("").map((letter, index) => (
            <span
              className={`reveal-text`}
              key={index}
              ref={(ref) => setlettersRef(ref, index)}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextReveal
