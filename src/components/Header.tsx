import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-[#284716] bg-[#fff4df]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto grid w-full grid-cols-[1fr_auto_1fr] items-center px-8 py-5">
        <Link to="/" className="group flex items-center gap-0 justify-self-start ">
          <span className="relative -mr-3 hidden h-16 w-20 items-center justify-center md:flex">
            <svg aria-hidden="true" viewBox="0 0 96 76" className="h-full w-full">
              <path d="M35 18C22 21 15 28 10 39" stroke="#244b1d" strokeWidth="5" strokeLinecap="round" />
              <path d="M40 12C30 17 24 25 20 38" stroke="#2f6427" strokeWidth="4" strokeLinecap="round" />
              <path d="M49 16C40 22 34 30 30 42" stroke="#244b1d" strokeWidth="4" strokeLinecap="round" />
              <circle cx="50" cy="43" r="9" fill="#9d4d16" />
              <path d="M43 38L57 48M57 38L43 48" stroke="#6c2f0c" strokeWidth="2" />
            </svg>
          </span>
          <span className="relative rounded-md border-2 border-[#8a6a35] bg-[#f6deb2] px-8 py-3 shadow-[0_4px_0_#c8a168] transition group-hover:border-[#0B5E1A]">
            <span className="absolute -top-3 left-8 h-3 w-1 rounded bg-[#8a6a35]" />
            <span className="absolute -top-3 right-8 h-3 w-1 rounded bg-[#8a6a35]" />
            <span className="text-2xl font-serif font-bold text-[#0B3D14]">
              Christmas Tree Shop
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-16 text-xl font-serif text-[#183b17] lg:flex">
          <a href="#shop" className="transition hover:text-[#C41E3A]">
            Shop
          </a>
          <a href="#delivery" className="transition hover:text-[#C41E3A]">
            Delivery
          </a>
          <a href="#about" className="transition hover:text-[#C41E3A]">
            About
          </a>
          <a href="#contact" className="transition hover:text-[#C41E3A]">
            Contact
          </a>
        </nav>

        <Link
          to="/cart"
          aria-label={`Cart${cartCount > 0 ? ` with ${cartCount} items` : ''}`}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#b51f1f] text-white shadow-md transition hover:bg-[#0B5E1A] justify-self-end"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
          >
            <path
              d="M5 5H7L9 15H18.5L20.5 8H8.2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 8.5L12 6.5L14 8.5"
              stroke="#D6A629"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6.5V13"
              stroke="#D6A629"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="10" cy="19" r="1.6" fill="currentColor" />
            <circle cx="18" cy="19" r="1.6" fill="currentColor" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#D6A629] px-1 text-xs font-bold text-[#0B3D14]">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
      <div className="h-4 border-t border-[#5c7b2e] bg-[linear-gradient(90deg,#224d1d_0_12px,#315f28_12px_24px,#224d1d_24px_36px)] bg-[length:36px_100%]" />
    </header>
  );
};
