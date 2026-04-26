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

  const currentPrice = getProductPrice(product.id, selectedSize);

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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="bg-gradient-to-b from-christmas-light to-white p-8 text-center text-5xl">
        {product.image}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-christmas-green mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full border-2 border-christmas-gold rounded px-3 py-2 focus:outline-none focus:border-christmas-green"
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
            className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-christmas-green"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded font-bold transition ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-christmas-red text-white hover:bg-christmas-green'
          }`}
        >
          {isAdded ? '✓ Added to Cart!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
