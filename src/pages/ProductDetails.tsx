import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingBag, Info } from "lucide-react";
import { useCart } from "../context/CartContext";

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#2d1b15] mb-4">Produto não encontrado</h2>
        <button onClick={() => navigate(-1)} className="text-[#d4af37] hover:underline">Voltar</button>
      </div>
    );
  }

  const price = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#1a100c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#d7ccc8] hover:text-[#d4af37] transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="bg-[#3e2723] rounded-[2rem] shadow-xl overflow-hidden border border-[#5d4037]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[400px] md:h-auto bg-[#1a100c]/50">
              {product.discount && (
                <div className="absolute top-6 right-6 z-30 bg-[#d4af37] text-[#2d1b15] font-black px-4 py-2 rounded-full shadow-lg transform rotate-3 animate-pulse-glow border-2 border-white text-lg">
                  -{product.discount}%
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.isEaster && (
                  <span className="inline-block bg-[#ffd1dc] text-[#2d1b15] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                    Especial de Páscoa
                  </span>
                )}
                <h1 className="font-display text-4xl md:text-5xl font-bold text-[#fdf5e6] mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-8 flex-wrap">
                  <span className="font-sans text-4xl font-black text-[#d4af37]">
                    R$ {price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.discount && (
                    <span className="text-xl text-[#bcaaa4] line-through font-medium">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>

                <div className="prose prose-stone mb-10">
                  <p className="text-[#d7ccc8] text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="bg-[#1a100c] p-4 rounded-xl flex items-start space-x-3 mb-10 border border-[#5d4037]">
                  <Info className="text-[#d4af37] flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-[#bcaaa4]">
                    Produto artesanal. As cores e detalhes podem variar ligeiramente da foto.
                  </p>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full md:w-auto bg-[#d4af37] text-[#2d1b15] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#fdf5e6] transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
                >
                  <ShoppingBag size={24} />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
