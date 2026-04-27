import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { CheckoutFormData } from '../types/index';
import { formatCurrency, getProductPrice, getProductById } from '../utils/helpers';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    shippingMethod: 'standard',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = getCartTotal();
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const shipping = shippingMethod === 'express' ? 19.99 : subtotal < 50 ? 9.99 : 0;
  const total = subtotal + tax + shipping;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setOrderCompleted(true);
      clearCart();
      setIsSubmitting(false);

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (items.length === 0 && !orderCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-[#0B5E1A] mb-8">Checkout</h1>
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
            <Link
              to="/"
              className="inline-block bg-[#C41E3A] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0B5E1A] transition"
            >
              Back to Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-white flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 text-center max-w-md">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-bold text-[#0B5E1A] mb-4">Order Placed!</h1>
          <p className="text-gray-600 mb-2">Thank you for your purchase!</p>
          <p className="text-gray-600 mb-6">
            A confirmation email will be sent to <span className="font-semibold">{formData.email}</span>
          </p>
          <p className="text-gray-500 text-sm">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#0B5E1A] mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0B5E1A] mb-4">Billing Information</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0B5E1A] mb-4">Shipping Address</h2>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                      errors.zipCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-[#0B5E1A] mb-4">Shipping Method</h2>

              <div className="space-y-3">
                <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#0B5E1A]">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={(e) => setShippingMethod(e.target.value as 'standard' | 'express')}
                    className="w-4 h-4"
                  />
                  <span className="ml-3 flex-1">
                    <span className="font-semibold">Standard Shipping</span>
                    <span className="text-sm text-gray-600"> - 5-7 business days</span>
                  </span>
                  <span className="font-semibold">
                    {subtotal < 50 && shippingMethod === 'standard' ? '$9.99' : 'FREE'}
                  </span>
                </label>

                <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#0B5E1A]">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={(e) => setShippingMethod(e.target.value as 'standard' | 'express')}
                    className="w-4 h-4"
                  />
                  <span className="ml-3 flex-1">
                    <span className="font-semibold">Express Shipping</span>
                    <span className="text-sm text-gray-600"> - 2-3 business days</span>
                  </span>
                  <span className="font-semibold">$19.99</span>
                </label>
              </div>
            </div>
          </form>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-bold text-[#0B5E1A] mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;

                const price = getProductPrice(product.id, item.selectedSize);

                return (
                  <div key={`${product.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                    <span>
                      {product.name} ({item.selectedSize}) x {item.quantity}
                    </span>
                    <span>{formatCurrency(price * item.quantity)}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4 space-y-2">
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

            <div className="border-t mt-4 pt-4 flex justify-between text-xl font-bold text-[#C41E3A] mb-6">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#C41E3A] text-white py-3 rounded-lg font-bold hover:bg-[#0B5E1A] transition disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>

            <Link
              to="/cart"
              className="block text-center mt-4 text-[#C41E3A] hover:text-[#0B5E1A] font-semibold"
            >
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
