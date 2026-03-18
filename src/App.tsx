/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetails } from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart";
import { ScrollManager } from "./components/ScrollManager";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollManager />
        <div className="flex flex-col min-h-screen font-sans bg-[#1a100c] text-[#fdf5e6]">
          <Navbar />
          <Cart />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/produto/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
