import { products } from '../data/products';

export const getProductPrice = (productId: number, selectedSize: string): number => {
  const product = products.find((p) => p.id === productId);
  if (!product) return 0;

  const size = product.sizes.find((s) => s.value === selectedSize);
  if (!size) return product.price;

  return product.price + size.priceModifier;
};

export const getProductById = (productId: number) => {
  return products.find((p) => p.id === productId);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateTax = (subtotal: number, taxRate: number = 0.08): number => {
  return Math.round(subtotal * taxRate * 100) / 100;
};

export const calculateShipping = (shippingMethod: 'standard' | 'express', subtotal: number): number => {
  if (shippingMethod === 'express') return 19.99;
  if (subtotal < 50) return 9.99;
  return 0;
};
