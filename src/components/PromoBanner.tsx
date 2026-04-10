import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto bg-on-surface rounded-[2rem] overflow-hidden relative min-h-[500px] flex items-center">
        <div className="grid md:grid-cols-12 w-full h-full">
          <div className="md:col-span-6 p-12 md:p-20 flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="editorial-label text-primary mb-6 block">Limited Edition</span>
              <h2 className="editorial-headline text-surface mb-8">
                THE DARK MATTER<br />
                COLLECTION
              </h2>
              <p className="text-surface/60 text-lg mb-10 max-w-md">
                A stealth aesthetic meets uncompromising power. The most advanced hardware we've ever built, finished in deep obsidian.
              </p>
              <button className="btn-gradient px-10 py-4 rounded-full editorial-label flex items-center gap-3 w-fit">
                Explore Collection
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
          
          <div className="md:col-span-6 relative h-[400px] md:h-auto">
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 md:-right-20 md:-top-20 md:-bottom-20"
            >
              <img
                src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=1200"
                alt="Dark Matter Collection"
                className="w-full h-full object-cover rounded-[2rem] md:rounded-l-[4rem]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-r from-on-surface via-on-surface/50 to-transparent md:hidden" />
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-12 hidden lg:block">
          <div className="text-surface/10 text-9xl font-black tracking-tighter select-none">
            2026
          </div>
        </div>
      </div>
    </section>
  );
}
