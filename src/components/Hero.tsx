import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="editorial-label text-primary mb-6 block">Future of Sound</span>
            <h1 className="editorial-display mb-8">
              THE KINETIC<br />
              <span className="text-primary">PULSE PRO</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-md mb-10 leading-relaxed">
              Engineered for the high-velocity lifestyle. Experience precision sound that moves as fast as you do.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="btn-gradient px-10 py-4 rounded-full editorial-label flex items-center gap-3 group">
                Pre-order Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 rounded-full editorial-label border border-outline-variant hover:bg-surface-container-low transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200"
              alt="Kinetic Pulse Pro"
              className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* 3D Overlapping Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 glass p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="editorial-label text-primary mb-1">Battery Life</div>
              <div className="text-3xl font-bold">40H+</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-12 glass p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="editorial-label text-primary mb-1">Latency</div>
              <div className="text-3xl font-bold">0.02ms</div>
            </motion.div>
          </motion.div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
