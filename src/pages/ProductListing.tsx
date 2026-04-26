import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ProductListing: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'real' | 'artificial'>('all');

  const filteredProducts = products.filter(
    (product) => filter === 'all' || product.category === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-christmas-light to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-christmas-green mb-2">Welcome to Christmas Tree Shop</h1>
          <p className="text-gray-600 text-lg">Find the perfect tree for your holiday celebration</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-christmas-red text-white'
                : 'bg-white text-christmas-red border-2 border-christmas-red hover:bg-christmas-red hover:text-white'
            }`}
          >
            All Trees
          </button>
          <button
            onClick={() => setFilter('real')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'real'
                ? 'bg-christmas-green text-white'
                : 'bg-white text-christmas-green border-2 border-christmas-green hover:bg-christmas-green hover:text-white'
            }`}
          >
            Fresh-Cut
          </button>
          <button
            onClick={() => setFilter('artificial')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'artificial'
                ? 'bg-christmas-gold text-christmas-green'
                : 'bg-white text-christmas-gold border-2 border-christmas-gold hover:bg-christmas-gold hover:text-white'
            }`}
          >
            Artificial
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
