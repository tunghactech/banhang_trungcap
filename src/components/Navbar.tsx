import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="glass mx-auto max-w-7xl rounded-full px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-black tracking-tighter text-primary">
            KINETIC<span className="text-on-surface">TECH</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Categories', 'New', 'Support'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="editorial-label text-on-surface/60 hover:text-on-surface transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          <button className="hidden md:flex p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <User size={20} />
          </button>
          <button className="md:hidden p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
