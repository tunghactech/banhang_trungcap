import { Instagram, Twitter, Youtube, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <a href="/" className="text-3xl font-black tracking-tighter text-primary mb-8 block">
              KINETIC<span className="text-on-surface">TECH</span>
            </a>
            <p className="text-on-surface-variant text-lg max-w-sm mb-10 leading-relaxed">
              Redefining the boundaries of technology through editorial precision and high-velocity engineering.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-surface transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="editorial-label mb-8">Shop</h4>
              <ul className="space-y-4">
                {['All Products', 'New Arrivals', 'Best Sellers', 'Refurbished'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="editorial-label mb-8">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Press', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="editorial-label mb-8">Support</h4>
              <ul className="space-y-4">
                {['Shipping', 'Returns', 'Warranty', 'FAQ'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-on-surface-variant">
            © 2026 Kinetic Tech. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
