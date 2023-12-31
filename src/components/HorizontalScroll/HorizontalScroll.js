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

                onComplete: () => {
                    gsap.to('.bottom--top', {
                        y: 0,
                        opacity: '1',
                        delay: .5,
                        ease: 'power2.inOut',
                    });
                }
            });
        }
        });

        // Set initial styles
        gsap.set('.bottom--top', {
            y: 100,
            opacity: 0,
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
                // Horizontal scroll ends
            }, 2000);
        }



    }, [])

  return (
    <section className='about__hero'>
        <div className='about__content about__content--scroll' style={{ display: 'flex' }}>
            {/* Name */}
            <div className='about__content__main p-4'>
                <div className='max-w-max mx-auto w-full -mt-6'>
                    <p className='pl-2 -mb-2 bottom--top'>
                        Hi, my name is
                    </p>
                    <h1 className='text-8xl font-bold text-center leading-[0.8]'>
                        <span className='md:pr-4 lg:pr-8' ref={perspectiveAnimations[0]}>
                            MOHD     
                        </span>
                        <span ref={perspectiveAnimations[1]}>
                            IRFAN
                        </span>
                    </h1>
                </div>
            </div>

            {/* Developer Content */}
            <p className='about__content-wrapper p-4 md:px-[6.25rem] flex items-center justify-center h-[100vh] whitespace-nowrap text-[4rem] md:text-[9vw]' datasplitting="char">
                & I'm a Front-End Developer
            </p>

            {/* Personal Content */}
            <div className='about-me__content flex-[0_0_100%] min-w-full min-h-[100vh] py-20 px-4 flex items-center justify-center'>
                <div className='about-me__content__cover md:max-w-[90%] md:mx-auto'>
                    <h2 className='text-[3.5rem] lg:text-[4.5rem] leading-none font-bold mb-10 lg:mb-20'>
                        Know More About Me!
                    </h2>
                    
                    <p className='self-end leading-loose md:text-[1.2rem]'>
                        Hello, I'm <span className='font-medium'>Mohd Irfan</span>, an enthusiastic and creative 
                        <span className='font-medium'> Front-End Developer</span> based in New Delhi. With a robust knowledge of web development, 
                        I am committed to crafting user-friendly and visually appealing web experiences.
                    
                        Throughout my enriching career journey, I've been fortunate to contribute my skills to a variety of exciting projects, 
                        from building responsive e-commerce websites to developing interactive web applications.
                        
                        Through my work, I've sharpened my skills and kept up with the latest in front-end tech and trends. When I'm not coding, you'll find me outdoors or enjoying video games.
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default HorizontalScroll