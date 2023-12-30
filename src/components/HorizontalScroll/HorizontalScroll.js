'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Splitting from 'splitting';

// import './HorizontalScroll.scss';

function HorizontalScroll() {
    let isGsapInit = false;

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
        if(!isGsapInit){
            isGsapInit = true;
            gsap.registerPlugin(ScrollTrigger);

            setTimeout(() => {
                // Text Reveal
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
                        end: "center center", // Adjust as needed
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
                        end: 'center center', // Adjust as needed
                        scrub: .6,
                        // markers: true,
                    },
                });
                // Text Reveal

            
                // Horizontal Scroll
                let horizontalSection = document.querySelector('.about__content--scroll');
            
                gsap.to('.about__content--scroll', {
                    x: () => horizontalSection.scrollWidth * -1,
                    xPercent: 100,
                    scrollTrigger: {
                        trigger: '.about__content--scroll',
                        start: 'top top',
                        end: '+=2000px',
                        pin: '.about__hero',
                        scrub: .6,
                    }
                });

                console.log('2horizontalSection.scrollWidth', horizontalSection.scrollWidth, horizontalSection.scrollWidth * -1);
            }, 2000);
        }



    }, [])

  return (
    <section className='about__hero'>
        <div className='about__content about__content--scroll' style={{ display: 'flex' }}>
            {/* Name */}
            <div className='about__content__main'>
                <h1 className='text-8xl font-bold text-center'>
                    <span className='md:pr-4 lg:pr-8' ref={perspectiveAnimations[0]}>
                        MOHD     
                    </span>
                    <span ref={perspectiveAnimations[1]}>
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
  )
}

export default HorizontalScroll