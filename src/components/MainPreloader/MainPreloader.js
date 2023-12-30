import React from 'react';
import './MainPreloader.scss';

function MainPreloader() {
  return (
    <div className='loader-container flex justify-center items-center p-4 fixed top-0 left-0 w-full h-full'>
        <svg viewBox='0 0 560 100'>
          <text x="50%" y="50%" dy=".32em" textAnchor='middle' className='text-body'>MOHD IRFAN</text>
        </svg>
    </div>
  )
}

export default MainPreloader