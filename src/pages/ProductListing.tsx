import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ProductListing: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'real' | 'artificial'>('all');

  const filteredProducts = products.filter(
    (product) => filter === 'all' || product.category === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-white flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 py-10 flex flex-col items-center">
        {/* Hero Section - TOP */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#0B5E1A] mb-2">Welcome to Christmas Tree Shop</h1>
          <p className="text-gray-600 text-lg">Find the perfect tree for your holiday celebration</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-[#C41E3A] text-white'
                : 'bg-white text-[#C41E3A] border-2 border-[#C41E3A] hover:bg-[#C41E3A] hover:text-white'
            }`}
          >
            All Trees
          </button>
          <button
            onClick={() => setFilter('real')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'real'
                ? 'bg-[#0B5E1A] text-white'
                : 'bg-white text-[#0B5E1A] border-2 border-[#0B5E1A] hover:bg-[#0B5E1A] hover:text-white'
            }`}
          >
            Fresh-Cut
          </button>
          <button
            onClick={() => setFilter('artificial')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'artificial'
                ? 'bg-[#FFD700] text-[#0B5E1A]'
                : 'bg-white text-[#FFD700] border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-white'
            }`}
          >
            Artificial
          </button>
        </div>

        {/* Christmas Intro Section */}
        <section className="w-full bg-white border border-gray-200 rounded-3xl p-12 mb-10 shadow-sm text-center">
          <h2 className="text-3xl font-semibold text-[#0B5E1A] mb-6">Celebrate the season with the perfect tree</h2>
          <p className="text-gray-600 leading-8 text-lg mb-12">
            Choose from fresh-cut firs and beautifully crafted artificial trees to bring festive warmth into your home.
            Our selection is hand-picked for quality, fullness, and holiday spirit — whether you want a family centerpiece or a cozy corner tree.
          </p>

          {/* Benefits Grid - Lower Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
            {/* Benefit 1: UK Grown */}
            <div className="bg-christmas-red rounded-2xl p-6 border border-[#0B5E1A]/20 text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">🌲</div>
              <h3 className="text-xl font-semibold text-[#0B5E1A] mb-2">UK Grown Trees</h3>
              <p className="text-gray-600 text-sm">Farm fresh British grown trees, sustainably sourced</p>
            </div>

            {/* Benefit 2: Delivery Window */}
            <div className="bg-[#F0F9FF]/30 rounded-2xl p-6 border border-[#0B5E1A]/20 text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-[#0B5E1A] mb-2">Pick Your Delivery Window</h3>
              <p className="text-gray-600 text-sm">Choose your perfect delivery week for maximum freshness</p>
            </div>

            {/* Benefit 3: Free Delivery */}
            <div className="bg-[#F0F9FF]/30 rounded-2xl p-6 border border-[#0B5E1A]/20 text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-[#0B5E1A] mb-2">Free UK Delivery</h3>
              <p className="text-gray-600 text-sm">On all mainland UK orders for your convenience</p>
            </div>
          </div>
        </section>

        {/* Products Column */}
        <div className="flex flex-col gap-6 items-center w-full max-w-2xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No trees found. Try a different filter!
          </div>
        )}
      </div>
    </div>
  );
};
