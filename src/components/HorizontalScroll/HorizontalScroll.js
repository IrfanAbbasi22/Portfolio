'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Splitting from 'splitting';

// import './HorizontalScroll.scss';

function HorizontalScroll() {
    let isGsapInit = false;
   
    useEffect(() => {
        if(!isGsapInit){
            isGsapInit = true;
            gsap.registerPlugin(ScrollTrigger);

            setTimeout(() => {
                const splitText = Splitting({ target: '.about__content-wrapper' });
                // Use gsap.from within a ScrollTrigger
                gsap.from(".char", {
                    y: (index) => (index % 2 === 0 ? '-150%' : '150%'),
                    opacity: 0,
                    stagger: {
                        each: 0.1,
                        from: "left",
                        grid: "auto",
                    },
                    scrollTrigger: {
                        trigger: ".char-container", 
                        start: "top", // Adjust as needed
                        end: "bottom", // Adjust as needed
                        scrub: 0.6,
                        // markers: true,
                    },
                });
            
                gsap.to(".char", {
                    y: 0,
                    opacity: 1,
                    stagger: {
                        each: 0.1,
                        from: "left",
                        grid: "auto",
                    },
                    scrollTrigger: {
                        trigger: ".char-container",
                        start: "top", // Adjust as needed
                        end: 'bottom', // Adjust as needed
                        scrub: .6,
                        markers: true,
                    },
                });

            
                let horizontalSection = document.querySelector('.about__content--scroll');
                console.log('horizontalSection.scrollWidth', horizontalSection.scrollWidth, horizontalSection.scrollWidth * -1);
                
            
                gsap.to('.about__content--scroll', {
                    x: () => horizontalSection.scrollWidth * -1,
                    xPercent: 100,
                    scrollTrigger: {
                        trigger: '.about__content--scroll',
                        start: 'top top',
                        end: '+=2000px',
                        pin: '.about__hero',
                        scrub: .6,
                        // markers: true,
                        // invalidateOnRefresh: true
                    }
                });

                console.log('2horizontalSection.scrollWidth', horizontalSection.scrollWidth, horizontalSection.scrollWidth * -1);
            }, 2000);
        }



    }, [])

  return (
    <>

    <section className='about__hero'>
        <div className='about__content about__content--scroll' style={{ display: 'flex' }}>
            {/* Name */}
            <div className='about__content__main'>
                <h1 className='text-8xl font-bold text-center'>
                    <span className='md:pr-4 lg:pr-8'>
                        MOHD     
                    </span>
                    <span>
                        IRFAN
                    </span>
                </h1>

                .
            </div>

            {/* Developer Content */}
            <p className='about__content-wrapper' datasplitting="char">
                is a front-end developer
            </p>

            {/* Personal Content */}
            <div className='about-me__content'>
                <div className='about-me__content__cover flex'>
                    <h2>
                        Know More About Me!
                    </h2>
                    
                    <p className='self-end'>
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


    </>
  )
}

export default HorizontalScroll