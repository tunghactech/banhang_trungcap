/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import PromoBanner from './components/PromoBanner';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import { PRODUCTS } from './types';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Products Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="editorial-label text-primary mb-4 block">Curated Selection</span>
              <h2 className="editorial-headline">FEATURED DEVICES</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
                ←
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
                →
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </section>

        <CategorySection />
        
        <PromoBanner />
        
        {/* Newsletter Section */}
        <section className="px-6 py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto text-center">
            <span className="editorial-label text-primary mb-6 block">Stay Connected</span>
            <h2 className="editorial-headline mb-8">JOIN THE PULSE</h2>
            <p className="text-on-surface-variant text-lg mb-10">
              Get early access to new launches, exclusive editorial content, and member-only performance insights.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-surface-container-lowest px-8 py-4 rounded-full border-b-2 border-transparent focus:border-primary outline-none transition-all"
                />
              </div>
              <button className="btn-gradient px-10 py-4 rounded-full editorial-label">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
