import { useState } from 'react';
import type {  Product, CartItem } from '../types/index';
import { useCart } from '../context/CartContext';
import { formatCurrency, getProductPrice } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].value);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: product.id,
      quantity,
      selectedSize,
    };
    addItem(cartItem);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-[40vw] max-w-[480px] min-w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col mx-auto">
      <div className="bg-gradient-to-b from-[#F0F9FF] to-white p-6 text-center text-5xl">
        {product.image}
      </div>
      
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#0B5E1A] mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full border-2 border-[#FFD700] rounded px-3 py-2 focus:outline-none focus:border-[#0B5E1A]"
          >
            {product.sizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label} - {formatCurrency(getProductPrice(product.id, size.value))}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0B5E1A]"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded font-bold transition ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-[#C41E3A] text-white hover:bg-[#0B5E1A]'
          }`}
        >
          {isAdded ? '✓ Added to Cart!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
