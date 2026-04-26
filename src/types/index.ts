export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  sizes: Size[];
  category: 'real' | 'artificial';
}

export interface Size {
  value: string;
  label: string;
  priceModifier: number;
}

export interface CartItem {
  productId: number;
  quantity: number;
  selectedSize: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: number, selectedSize: string) => void;
  updateQuantity: (productId: number, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  shippingMethod: 'standard' | 'express';
}
