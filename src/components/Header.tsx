import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { items } = useCart();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#0B5E1A] text-black shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold hover:text-[#FFD700] transition">
          🎄 Christmas Tree Shop
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#FFD700] transition">
            Browse Trees
          </Link>
          <Link to="/cart" className="relative hover:text-[#FFD700] transition">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C41E3A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
