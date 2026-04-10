import { motion } from 'motion/react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-surface-container-lowest rounded-[1.5rem] p-6 flex flex-col group"
    >
      <div className="relative aspect-square bg-surface-container-low rounded-[1rem] overflow-hidden mb-6 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        
        {product.badge && (
          <div className="absolute top-0 left-0 bg-primary text-white editorial-label px-4 py-2 rounded-br-xl">
            {product.badge}
          </div>
        )}
        
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-on-surface text-surface rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <ShoppingBag size={20} />
        </button>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="editorial-label text-on-surface-variant mb-1 block">{product.category}</span>
            <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-primary">${product.price}</div>
            {product.originalPrice && (
              <div className="text-sm text-on-surface-variant line-through">${product.originalPrice}</div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">
          {product.description}
        </p>
        
        <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
          {product.specs.map((spec) => (
            <div key={spec.label}>
              <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant">{spec.label}</div>
              <div className="text-xs font-bold">{spec.value}</div>
            </div>
          ))}
          <button className="ml-auto p-2 text-on-surface-variant hover:text-primary transition-colors">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
