import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById, getProductPrice, formatCurrency } from '../utils/helpers';

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const taxRate = 0.08;
  const tax = Math.round(subtotal * taxRate * 100) / 100;
  const shipping = subtotal < 50 && items.length > 0 ? 9.99 : 0;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-christmas-light to-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-christmas-green mb-8">Shopping Cart</h1>
          
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
            <Link
              to="/"
              className="inline-block bg-christmas-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-christmas-green transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-christmas-light to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-christmas-green mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;

                const price = getProductPrice(product.id, item.selectedSize);
                const itemTotal = price * item.quantity;

                return (
                  <div key={`${product.id}-${item.selectedSize}`} className="border-b p-4 last:border-b-0">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{product.image}</div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-christmas-green">{product.name}</h3>
                        <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                        <p className="font-semibold text-christmas-red">{formatCurrency(price)}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, item.selectedSize, item.quantity - 1)}
                          className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(product.id, item.selectedSize, parseInt(e.target.value))
                          }
                          className="w-12 text-center border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => updateQuantity(product.id, item.selectedSize, item.quantity + 1)}
                          className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg">{formatCurrency(itemTotal)}</p>
                        <button
                          onClick={() => removeItem(product.id, item.selectedSize)}
                          className="text-christmas-red hover:text-christmas-green text-sm font-semibold mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/"
              className="inline-block text-christmas-red hover:text-christmas-green font-semibold mt-4"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-bold text-christmas-green mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4 border-b pb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-christmas-red mb-6">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-christmas-red text-white py-3 rounded-lg font-bold text-center hover:bg-christmas-green transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
