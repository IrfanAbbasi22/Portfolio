import Image from 'next/image';
import MainPreloader from '@/components/MainPreloader/MainPreloader';
import Header from '@/components/Header';
import './style.scss';
import CustomCursor from '@/components/Cursor/CustomCursor';
import Skills from '@/components/Skills/Skills';
import Experirence from '@/components/Experience/Experirence';
// import LocomotiveScroll from 'locomotive-scroll';

import dynamic from 'next/dynamic';

const HorizontalScroll = dynamic(() => import('@/components/HorizontalScroll/HorizontalScroll'), {
  ssr: false, // Disable server-side rendering
});


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header/> */}
      <CustomCursor/>
      {/* <MainPreloader/> */}
      <HorizontalScroll/>
      <Skills/>
      <Experirence/>
      
    </main>
  )
}
