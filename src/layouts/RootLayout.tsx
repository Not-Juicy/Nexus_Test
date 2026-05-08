import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function RootLayout() {
  const { pathname, hash } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle hashes and scroll-to-top
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200); 
      }
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white relative">
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
}
