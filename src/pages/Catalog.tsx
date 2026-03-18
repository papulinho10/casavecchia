import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Catalog() {
  const [showEasterFirst, setShowEasterFirst] = useState(false);
  const navigate = useNavigate();

  // Sort: Easter first if toggle is on
  const sortedProducts = [...products].sort((a, b) => {
    if (showEasterFirst) {
      if (a.isEaster && !b.isEaster) return -1;
      if (!a.isEaster && b.isEaster) return 1;
    }
    return 0;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#1a100c] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#d4af37] rounded-full mix-blend-multiply opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#5d4037] rounded-full mix-blend-multiply opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#d7ccc8] hover:text-[#d4af37] transition-colors mb-8 font-medium bg-[#3e2723]/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm w-fit"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-[#fdf5e6] mb-6"
          >
            Nosso <span className="text-[#d4af37] italic">Catálogo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#d7ccc8] max-w-2xl mx-auto"
          >
            Descubra todos os nossos produtos, desde os clássicos até as edições especiais.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowEasterFirst(!showEasterFirst)}
            className={`flex items-center space-x-2 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md ${
              showEasterFirst
                ? "bg-[#d4af37] text-[#2d1b15] shadow-[#d4af37]/50 scale-105"
                : "bg-[#3e2723] text-[#fdf5e6] border border-[#5d4037] hover:bg-[#5d4037]"
            }`}
          >
            <Sparkles size={18} className={showEasterFirst ? "text-[#d4af37] animate-pulse" : ""} />
            <span>Destaques de Páscoa</span>
          </button>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
