import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils/cn";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Catálogo", path: "/catalogo" },
    { name: "Início", path: "/" },
    { name: "Nossa História", path: "/#historia" },
    { name: "Contato", path: "/#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a100c]/90 backdrop-blur-md text-[#fdf5e6] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://i.postimg.cc/6pLjwYkb/Design-Sem-Nome-1-Editado.png" 
              alt="Casa Vecchia" 
              className="h-14 md:h-16 object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={cn(
                  "hover:text-[#d4af37] transition-colors font-medium text-sm uppercase tracking-widest",
                  location.pathname === link.path && "text-[#d4af37]"
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/casavecchiachocolates/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative hover:text-[#d4af37] transition-colors"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d4af37] text-[#2d1b15] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-5">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-[#fdf5e6] hover:text-[#d4af37] transition-colors"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d4af37] text-[#2d1b15] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-[#fdf5e6] hover:text-[#d4af37] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#1a100c] shadow-xl border-t border-[#3e2723]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium hover:bg-[#5d4037] hover:text-[#d4af37] transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
