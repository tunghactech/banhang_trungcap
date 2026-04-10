import { motion } from 'motion/react';
import { CATEGORIES } from '../types';

export default function CategorySection() {
  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="editorial-label text-primary mb-4 block">Ecosystem</span>
            <h2 className="editorial-headline">SHOP BY CATEGORY</h2>
          </div>
          <a href="/categories" className="editorial-label text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant pb-1">
            View All Categories
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.a
              key={category.id}
              href={`/category/${category.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden bg-surface-container-lowest"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-surface tracking-tight group-hover:translate-x-2 transition-transform">
                  {category.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
