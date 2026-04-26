import React, { createContext, useContext, useState } from 'react';
import type {  CartItem, CartContextType } from '../types/index';
import { getProductPrice } from '../utils/helpers';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    const existingItem = items.find(
      (item) => item.productId === newItem.productId && item.selectedSize === newItem.selectedSize
    );

    if (existingItem) {
      setItems(
        items.map((item) =>
          item.productId === newItem.productId && item.selectedSize === newItem.selectedSize
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      );
    } else {
      setItems([...items, newItem]);
    }
  };

  const removeItem = (productId: number, selectedSize: string) => {
    setItems(items.filter((item) => !(item.productId === productId && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (productId: number, selectedSize: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, selectedSize);
    } else {
      setItems(
        items.map((item) =>
          item.productId === productId && item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = (): number => {
    return items.reduce((total, item) => {
      const price = getProductPrice(item.productId, item.selectedSize);
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
