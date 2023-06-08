import React, { useEffect } from "react";
import "./landing.css";
// import "./cursor.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutLanding = () => {
  gsap.registerPlugin(ScrollTrigger);

  function navbar() {
    const navLink = gsap.utils.toArray(".main-nav a");
    const navLinkReverse = gsap.utils.toArray(".main-nav a").reverse();
    // console.log(navLink);
    navLink.forEach((link) => {
      link.addEventListener("mouseleave", (e) => {
        link.classList.add("animate-out");

        setTimeout(() => {
          link.classList.remove("animate-out");
        }, 300);
      });
    });

    function navAnimation(direction) {
      const scrollDown = direction === 1;
      const links = scrollDown ? navLink : navLinkReverse;
      // console.log(scrollDown);
      return gsap.to(links, {
        duration: 0.3,
        stagger: 0.05,
        autoAlpha: () => (scrollDown ? 0 : 1),
        y: () => (scrollDown ? 20 : 0),
        ease: "bounce.out",
      });
    }

    ScrollTrigger.create({
      start: 100,
      toggleClass: {
        targets: "body",
        className: "has-scrolled",
      },
      onEnter: ({ direction }) => navAnimation(direction),
      onLeaveBack: ({ direction }) => navAnimation(direction),
    });
  }

  function header() {
    document.querySelector("header").addEventListener("mousemove", moveImages);
  }

  function moveImages(e) {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;
    const xPos = offsetX / clientWidth - 0.5;
    const yPos = offsetY / clientHeight - 0.5;
    const leftImages = gsap.utils.toArray(".hg__left .hg__image");
    const rightImages = gsap.utils.toArray(".hg__right .hg__image");
    const modifier = (index) => index * 1.2 + 0.5;

    leftImages.forEach((image, index) => {
      gsap.to(image, {
        duration: 1,
        x: xPos * 20 * modifier(index),
        y: yPos * 30 * modifier(index),
        // 配合 css perspective
        rotateX: xPos * 10,
        rotateY: yPos * 20,
      });
    });

    rightImages.forEach((image, index) => {
      gsap.to(image, {
        duration: 1,
        x: xPos * 20 * modifier(index),
        y: -yPos * 30 * modifier(index),
        rotateX: xPos * 20,
        rotateY: yPos * 10,
      });
    });
  }

  useEffect(() => {
    navbar();
    header();
  });

  return (
    <div className="bg-gradient-to-b from-indigo-400 to-indigo-900">
      <nav
        class="main-nav"
        className="flex items-center justify-between w-full main-nav lg:px-20"
      >
        <a href="/">
          {" "}
          <img src="/images/png/Union.png" className="h-[50px]" alt="" />
        </a>
        <ul>
          <li>
            <a className="font-bold" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a className="font-bold" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="font-bold" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main id="main">
        <header data-color="#ACB7AE">
          <h1>
            <span>Open for Policy</span>
            <span>& Impact</span>
          </h1>
          <p class="subtitle">Yamete Kudasai</p>
          <div class="decor__circle"></div>
          <div class="header__gallery">
            <div class="hg__left">
              <div class="hg__image hg__image--l">
                <img src="/images/png/about-focus-one.png" alt="" />
              </div>
              <div class="hg__image hg__image--m">
                <img src="/images/png/about-focus-two.png" alt="" />
              </div>
              <div class="hg__image hg__image--s">
                <img src="/images/png/about-focus-three.png" alt="" />
              </div>
            </div>
            <div class="hg__right">
              <div class="hg__image hg__image--l">
                <img src="/images/png/about-focus-four.png" alt="" />
              </div>
              <div class="hg__image hg__image--m">
                <img src="/images/png/services-five.png" alt="" />
              </div>
              <div class="hg__image hg__image--s">
                <img src="/images/png/services-two.png" alt="" />
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default AboutLanding;
