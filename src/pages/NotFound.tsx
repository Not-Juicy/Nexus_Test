import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Ghost } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist or has been moved." />
      
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-xl">
            <Ghost className="w-12 h-12 text-red-600" />
          </div>
        </motion.div>

        <h1 className="text-8xl md:text-[12rem] font-black text-white tracking-tighter leading-none mb-4 italic">
          4<span className="text-transparent [-webkit-text-stroke:2px_white] opacity-30">0</span>4
        </h1>
        
        <p className="text-white/40 text-xl md:text-2xl font-bold uppercase tracking-widest mb-12 max-w-md mx-auto">
          Signals Lost. <br />
          <span className="text-white">The page has vanished into the void.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
          >
            <Home size={18} /> BACK TO BASE
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white/60 font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft size={18} /> GO BACK
          </button>
        </div>
      </motion.div>

      {/* Decorative Branding */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/10 uppercase tracking-[1em] whitespace-nowrap">
        Nexus Digital // Systems Audit 
      </div>
    </div>
  );
}
