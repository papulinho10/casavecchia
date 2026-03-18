import React from "react";
import { Product } from "../data/products";
import { motion } from "motion/react";
import { ShoppingBag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  key?: string | number;
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to details page
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
      whileHover={{ y: -5 }}
      className="bg-transparent rounded-2xl overflow-hidden transition-all duration-500 group relative flex flex-col h-full"
    >
      <Link to={`/produto/${product.id}`} className="flex flex-col h-full">
        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-30 pointer-events-none"></div>

        <div className="relative h-48 md:h-56 overflow-hidden bg-[#1a100c]/30">
          {product.discount && (
            <div className="absolute top-3 right-3 z-30 bg-[#d4af37] text-[#2d1b15] font-black px-3 py-1 rounded-full shadow-md transform rotate-3 animate-pulse-glow border-2 border-white text-sm">
              -{product.discount}%
            </div>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out relative z-10"
            referrerPolicy="no-referrer"
            draggable={false}
          />
          
          {/* Hover Action Overlay */}
          <div className="absolute inset-0 bg-[#2d1b15]/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
            <div className="bg-white/90 text-[#2d1b15] px-4 py-2 rounded-full font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <Eye size={18} />
              <span className="text-sm">Ver Detalhes</span>
            </div>
          </div>
        </div>
        
        <div className="p-5 bg-transparent flex-grow flex flex-col justify-between relative z-10">
          <div>
            <h3 className="font-display text-xl font-bold text-[#fdf5e6] mb-1.5 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
              {product.name}
            </h3>
            <p className="text-[#d7ccc8] text-xs line-clamp-2 mb-4 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-end justify-between mt-auto pt-3 border-t border-[#5d4037]">
            <div className="flex flex-row items-center flex-wrap gap-x-2">
              <span className="font-sans text-xl font-black text-[#d4af37]">
                R$ {product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2).replace('.', ',') : product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.discount && (
                <span className="text-xs text-[#bcaaa4] line-through font-medium">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-[#d4af37] text-[#2d1b15] p-2.5 rounded-full hover:bg-[#fdf5e6] transition-colors shadow-md z-40 relative"
              title="Adicionar ao Carrinho"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
