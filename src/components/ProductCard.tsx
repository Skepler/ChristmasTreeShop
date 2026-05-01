import { useState } from 'react';
import type { Product, CartItem } from '../types/index';
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
  const selectedPrice = getProductPrice(product.id, selectedSize);

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
    <article className="mx-auto grid w-full max-w-[420px] min-h-48 grid-cols-[46%_1fr] gap-4 rounded-lg border border-[#e3c99f] bg-[#fff8ec]/95 p-3 shadow-sm transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-full min-h-44 w-full rounded-sm object-cover"
      />

      <div className="flex min-w-0 flex-col justify-center py-1 pr-1 text-center">
        <div className="flex-1">
          <h3 className="font-serif text-xl font-bold leading-tight text-[#183b17]">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-5 text-[#3f3427]">
            {product.description}
          </p>
          <p className="mt-3 font-serif text-xl font-bold text-[#a51e1e]">
            {formatCurrency(selectedPrice)}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_4.5rem] gap-2">
          <select
            aria-label={`${product.name} size`}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="h-9 rounded-md border border-[#d8c4a3] bg-[#fffdf8] px-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
          >
            {product.sizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>

          <input
            aria-label={`${product.name} quantity`}
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="h-9 rounded-md border border-[#d8c4a3] bg-[#fffdf8] px-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-2 h-10 rounded-md font-serif text-base font-bold text-white shadow-sm transition ${
            isAdded ? 'bg-[#0B5E1A]' : 'bg-[#b51f1f] hover:bg-[#0B5E1A]'
          }`}
        >
          {isAdded ? 'Added to Cart!' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
};
