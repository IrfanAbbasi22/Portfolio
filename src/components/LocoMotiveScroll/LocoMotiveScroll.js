'use client';
import { useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';


const SmoothScroll = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      // Add other options as needed
    });

    return () => {
      scroll.destroy(); // Clean up when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return null; // The component doesn't render anything to the DOM
};

export default SmoothScroll;
