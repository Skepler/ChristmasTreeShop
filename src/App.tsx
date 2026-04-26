import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ProductListing } from './pages/ProductListing';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';


/*export default function App() {
  return <h1 className="text-4xl text-blue-500">Tailwind Test</h1>;
}*/

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
