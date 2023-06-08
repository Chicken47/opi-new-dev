import React, { useEffect } from "react";
import "./sidewaysSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SidewaysSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sections = [...document.querySelectorAll("section")];
  const wrapper = document.querySelector(".wrapper");
  const headings = [...document.querySelectorAll("[data-section-heading]")];
  useEffect(() => {
    gsap.to(".shape", {
  scrollTrigger: {
		trigger: '[data-section="2"]',
		start: 'top center',
		scrub: 0.5,
		pin: '.shape',
	},
  x: 500,
	rotation: 360,
	ease: 'none',
	duration: 1
})

gsap.to(".timeline", {
  scrollTrigger: {
		trigger: '.wrapper',
		start: 'top top',
		end: () => wrapper?.offsetHeight,
		scrub: 0.5,
		id: 'timeline'
	},
  x: wrapper?.offsetWidth + 150,
	ease: 'none',
	duration: 1
})

gsap.set('[data-section-heading="2"]', {
	x: -500
})
gsap.to('[data-section-heading="2"]', {
  scrollTrigger: {
		trigger: '[data-section-heading="2"]',
		start: 'top top',
		end: () => sections[1].offsetHeight,
		scrub: 0.5,
	},
  x: wrapper.offsetWidth + 250,
	ease: 'none',
	duration: 1
})

gsap.set('[data-section="3"]', {
	x: window.innerWidth * -1
})
gsap.to('[data-section="3"]', {
  scrollTrigger: {
		trigger: '[data-section="3"]',
		start: 'top top',
		end: () => sections[2].offsetHeight,
		scrub: 0.5,
		pin: true,
		pinSpacing: false
	},
  x: 0,
	ease: 'none',
	duration: 1
})
  }, [])
  return (
    <div class="wrapper">
      <section data-section="1">
        <h1>Hello</h1>
      </section>
      <section data-section="2">
        <h2 data-section-heading="2">Section 2</h2>
        <div class="shape"></div>
      </section>
      <section data-section="3">
        <h2 data-section-heading="3">Section 3</h2>
      </section>
      <section data-section="4">
        <h2 data-section-heading="4">Section 4</h2>
      </section>

      <div class="timeline-track">
        <div class="timeline" data-timeline></div>
      </div>
    </div>
  );
};

export default SidewaysSection;
