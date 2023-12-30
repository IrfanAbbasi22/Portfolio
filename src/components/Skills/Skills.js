'use client';
import React, {useEffect} from 'react';
import gsap from 'gsap';
import { Power4, Elastic } from 'gsap/all';
// import './Skills.scss';

function Skills() {
    const skills = [
        "HTML", "CSS", "SASS", "Tailwind CSS", "Bootstrap", 
        "JavaScript", "JQuery", "ReactJS", "AngularJS", "NextJS", "GSAP", 
        "WordPress", "Figma", "Photoshop", "Adobe XD", "Command Line", "VS Code", 
        "Github",
    ];

    
    useEffect(() => {
        const magnets = document.querySelectorAll('.magnetic');
        
        magnets.forEach( (magnet) => {
            magnet.addEventListener('mousemove', moveMagnet );
            magnet.addEventListener('mouseleave', function(event) {
                gsap.to( event.currentTarget, 1.5, {
                  x: 0, 
                  y: 0, 
                  ease: Elastic.easeOut
                });
                gsap.to( event.currentTarget.querySelector('.btn-text'), 1.5, {
                  x: 0, 
                  y: 0, 
                  ease: Elastic.easeOut
                });
            });
        });
        
        // Mouse move
        function moveMagnet(event) {
            let magnetButton = event.currentTarget;
            let bounding = magnetButton.getBoundingClientRect();
            let magnetsStrength = magnetButton.getAttribute("data-strength");
            let magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
            
            gsap.to( magnetButton, 1.5, {
                x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
                y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
                rotate: "0.001deg",
                ease: Power4.easeOut
            });
            
            gsap.to(  magnetButton.querySelector('.btn-text'), 1.5, {
                x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
                y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
                rotate: "0.001deg",
                ease: Power4.easeOut
            });
        }
    }, []);


    return (
        <section className='skills py-20 px-4'>
            <div className='skills__container md:max-w-[90%] lg:max-w-[60%] md:mx-auto'>
                <h2 className='text-[3.5rem] font-bold text-center mb-10 lg:text-[4.5rem]'>
                    Skills & Tools
                </h2>

                <div className='skills__contain__wrapper flex flex-wrap gap-2 md:gap-4 justify-center'>
                    {
                        skills.map((element, index) => (
                            <div key={index} className='magnetic md:text-[18px] leading-0 shadow-2dShadow relative skillBox overflow-hidden border-[1px] border-solid border-cyan-950 rounded-[2rem] px-[1.25rem] py-[5px] group' data-strength="100" data-strength-text="50">
                                <span className='btn-text inline-block group-hover:opacity-0'>
                                    {element}
                                </span>

                                <div className='btn-text inline-block flex gap-5 top-[5px] absolute animate-marqueeAnimation opacity-0 group-hover:opacity-100 whitespace-nowrap'>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                    <span>
                                        {element}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills