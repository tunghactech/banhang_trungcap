export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  badge?: string;
  specs: { label: string; value: string }[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Neural Pro X1',
    category: 'Audio',
    price: 349,
    originalPrice: 429,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    description: 'Precision-engineered spatial audio with active neural noise cancellation.',
    badge: 'New Arrival',
    specs: [
      { label: 'Battery', value: '40h' },
      { label: 'Driver', value: '40mm' },
      { label: 'Weight', value: '250g' }
    ]
  },
  {
    id: '2',
    name: 'Vortex Watch Ultra',
    category: 'Wearables',
    price: 799,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate companion for extreme performance and deep health insights.',
    specs: [
      { label: 'Display', value: 'OLED' },
      { label: 'Water', value: '100m' },
      { label: 'GPS', value: 'Dual' }
    ]
  },
  {
    id: '3',
    name: 'Lumina Pad 13',
    category: 'Computing',
    price: 1099,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    description: 'A canvas for your imagination. Powered by the M3 Kinetic chip.',
    badge: '15% OFF',
    specs: [
      { label: 'Screen', value: '13"' },
      { label: 'RAM', value: '16GB' },
      { label: 'Storage', value: '512GB' }
    ]
  },
  {
    id: '4',
    name: 'Zenith Camera S',
    category: 'Photography',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    description: 'Capture the pulse of the world in stunning 8K resolution.',
    specs: [
      { label: 'Sensor', value: 'Full' },
      { label: 'ISO', value: '50k' },
      { label: 'AF', value: 'Neural' }
    ]
  }
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Audio', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Wearables', image: 'https://images.unsplash.com/photo-1508685096489-7aac29145fe0?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Computing', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Mobile', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400' }
];
