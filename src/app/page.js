import Image from 'next/image';
import MainPreloader from '@/components/MainPreloader/MainPreloader';
import Header from '@/components/Header';
import './style.scss';
import HorizontalScroll from '@/components/HorizontalScroll/HorizontalScroll';
import CustomCursor from '@/components/Cursor/CustomCursor';
import Skills from '@/components/Skills/Skills';
import Experirence from '@/components/Experience/Experirence';


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
