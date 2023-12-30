'use client';
import { useEffect, useState } from 'react';
import './CustomCursor.scss';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });

      const cursor = document.querySelector('.cursor');
      const cursorinner = document.querySelector('.cursor2');

      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      cursorinner.style.left = `${x}px`;
      cursorinner.style.top = `${y}px`;
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      document.querySelector('.cursor').classList.add('click');
      document.querySelector('.cursor2').classList.add('cursorinnerhover');
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      document.querySelector('.cursor').classList.remove('click');
      document.querySelector('.cursor2').classList.remove('cursorinnerhover');
    };

    const handleMouseOver = () => {
      setIsHovering(true);
      document.querySelector('.cursor').classList.add('hover');
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      document.querySelector('.cursor').classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const anchors = document.querySelectorAll('a');
    anchors.forEach((item) => {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      anchors.forEach((item) => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default CustomCursor;
