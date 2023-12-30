'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Splitting from 'splitting';

// import './HorizontalScroll.scss';

function HorizontalScroll() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    
  
  
  

    const perspectiveAnimations = [useRef(), useRef()];
    useEffect(() => {
        perspectiveAnimations.forEach((ref, index) => {
        if (ref.current) {
            // Set initial styles
            gsap.set(ref.current, {
                opacity: 0,
                transform: `translate3d(0px, 60%, -5vw) scale3d(1, 1, 1) rotateX(-100deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
            });

            // Animate to new styles
            gsap.to(ref.current, {
                duration: 0.9,
                transform: `translate3d(0px, 0%, 0vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
                opacity: '1',
                ease: 'power2.inOut',
                repeat: 0,
                delay: index === 1 ? 0.5 : 0,
            });
        }
        });
    }, []);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitText = Splitting({ target: '.about__content-wrapper' });
    // Use gsap.from within a ScrollTrigger
gsap.from(".char", {
    y: (index) => (index % 2 === 0 ? -300 : 300),
    opacity: 0,
    stagger: {
        each: 0.1,
        from: "left",
        grid: "auto",
    },
    // scrollTrigger: {
    //     // trigger: triggerRef.current,
    //     trigger: ".char-container", // Replace with the appropriate trigger element or selector
    //     start: "top center", // Adjust as needed
    //     end: "bottom center", // Adjust as needed
    //     scrub: 0.6,
    // },
});

// Use gsap.to within a ScrollTrigger
gsap.to(".char", {
    y: 0,
    opacity: 1,
    stagger: {
        each: 0.1,
        from: "left",
        grid: "auto",
    },
    scrollTrigger: {
        trigger: ".char-container", // Replace with the appropriate trigger element or selector
        start: "top top", // Adjust as needed
        end: "1500 center", // Adjust as needed
        scrub: 1,
        
    },
});

let sections = gsap.utils.toArray(".about__content > *")

let scrollTween = gsap.to(sections,{
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    duration: 6,
    scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: true,
        markers: true,
        end: `+=${sectionRef.offsetWidth}`
    }
});

    // const pin = gsap.fromTo(
    //   sectionRef.current,
    //   {
    //     translateX: 0,
    //   },
    //   {
    //     translateX: "-200vw",
    //     ease: "none",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       start: "top top",
    //       end: "2000 top",
    //       scrub: 0.6,
    //       pin: true,
    //     },
    //   }
    // );
    // return () => {
    //   {/* A return function for killing the animation on component unmount */ }
    //   pin.kill();
    // };
  }, []);

  return (
    <div>

<section className='about__hero'>
    <div ref={triggerRef}>
        <div className='about__content' ref={sectionRef}>
            {/* Name */}
            <div className='about__content__main'>
                <h1>
                    <span ref={perspectiveAnimations[0]}>
                        MOHD     
                    </span>
                    <span ref={perspectiveAnimations[1]}>
                        IRFAN
                    </span>
                </h1>
            </div>

            {/* Developer Content */}
            <p className='about__content-wrapper' datasplitting="char">
                is a front-end developer
            </p>

            {/* Personal Content */}
            <div className='about-me__content'>
                <h2>
                    Know More About Me!
                </h2>

                <p>
                    Dimitri is a young developer living in Belgium
                    more precisely in Brussels specialized with Wordpress and
                    React/Next.js. In each project, i focus on animations,
                    layout and interactions, so that users have a
                    pleasant experience on websites. In addition to my
                    work, i enjoy doing sports like basketball or
                    skateboarding.
                </p>
            </div>
        </div>
    </div>
</section>

    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div>
        <div className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default HorizontalScroll