import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { items } = useCart();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-christmas-green text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold hover:text-christmas-gold transition">
          🎄 Christmas Tree Shop
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-christmas-gold transition">
            Browse Trees
          </Link>
          <Link to="/cart" className="relative hover:text-christmas-gold transition">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-christmas-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
