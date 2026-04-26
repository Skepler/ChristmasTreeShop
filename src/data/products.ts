import  type {  Product } from '../types/index';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Pine Tree',
    price: 49.99,
    description: 'Beautiful fresh-cut Douglas Fir with rich green needles. Perfect for any living room.',
    image: '🌲',
    category: 'real',
    sizes: [
      { value: '4ft', label: '4 feet', priceModifier: 0 },
      { value: '6ft', label: '6 feet', priceModifier: 15 },
      { value: '8ft', label: '8 feet', priceModifier: 30 },
    ],
  },
  {
    id: 2,
    name: 'Luxury Spruce',
    price: 79.99,
    description: 'Premium Norway Spruce with full, dense branches. Ideal for large spaces.',
    image: '🎄',
    category: 'real',
    sizes: [
      { value: '5ft', label: '5 feet', priceModifier: 0 },
      { value: '7ft', label: '7 feet', priceModifier: 20 },
      { value: '9ft', label: '9 feet', priceModifier: 40 },
    ],
  },
  {
    id: 3,
    name: 'Compact Fir',
    price: 39.99,
    description: 'Smaller, compact tree perfect for apartments or small corners.',
    image: '🌲',
    category: 'real',
    sizes: [
      { value: '3ft', label: '3 feet', priceModifier: 0 },
      { value: '4ft', label: '4 feet', priceModifier: 10 },
    ],
  },
  {
    id: 4,
    name: 'Artificial Deluxe',
    price: 129.99,
    description: 'Realistic pre-lit artificial tree with 600 LED lights. No maintenance needed.',
    image: '✨',
    category: 'artificial',
    sizes: [
      { value: '6ft', label: '6 feet', priceModifier: 0 },
      { value: '7.5ft', label: '7.5 feet', priceModifier: 20 },
    ],
  },
  {
    id: 5,
    name: 'Premium Artificial Noble Fir',
    price: 199.99,
    description: 'High-end artificial tree with 1000 LED lights and realistic branch tips.',
    image: '✨',
    category: 'artificial',
    sizes: [
      { value: '7ft', label: '7 feet', priceModifier: 0 },
      { value: '8ft', label: '8 feet', priceModifier: 25 },
    ],
  },
  {
    id: 6,
    name: 'Budget Friendly Fresh Fir',
    price: 34.99,
    description: 'Affordable fresh-cut tree. Great value for the budget-conscious shopper.',
    image: '🌲',
    category: 'real',
    sizes: [
      { value: '4ft', label: '4 feet', priceModifier: 0 },
      { value: '5ft', label: '5 feet', priceModifier: 8 },
    ],
  },
];
