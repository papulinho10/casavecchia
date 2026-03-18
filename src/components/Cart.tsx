import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, ShoppingBag, MapPin, Store, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  const [deliveryMethod, setDeliveryMethod] = useState<"buscar" | "tele" | null>(null);
  const [city, setCity] = useState<"gramado" | "canela" | null>(null);
  const [address, setAddress] = useState("");

  const isCheckoutValid = 
    items.length > 0 && 
    deliveryMethod !== null && 
    (deliveryMethod === "buscar" || (deliveryMethod === "tele" && city !== null && address.trim() !== ""));

  const handleCheckout = () => {
    if (!isCheckoutValid) return;

    let message = `Olá! Gostaria de finalizar minha compra na Casa Vecchia:\n\n`;
    message += `*PRODUTOS:*\n`;
    
    items.forEach(item => {
      const price = item.product.discount 
        ? item.product.price * (1 - item.product.discount / 100) 
        : item.product.price;
      message += `- ${item.quantity}x ${item.product.name} (R$ ${price.toFixed(2).replace('.', ',')})\n`;
    });

    message += `\n*SUBTOTAL:* R$ ${cartTotal.toFixed(2).replace('.', ',')}\n`;

    if (deliveryMethod === "buscar") {
      message += `\n*ENTREGA:* Vou buscar no local\n`;
      message += `*TOTAL A PAGAR:* R$ ${cartTotal.toFixed(2).replace('.', ',')}\n`;
    } else {
      message += `\n*ENTREGA:* Tele Entrega (${city === 'gramado' ? 'Gramado' : 'Canela'})\n`;
      message += `*ENDEREÇO:* ${address}\n`;
      message += `*FRETE:* A combinar\n`;
      message += `*TOTAL A PAGAR:* R$ ${cartTotal.toFixed(2).replace('.', ',')} + Frete a combinar\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5554981443334?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#1a100c] shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-[#2d1b15] text-[#fdf5e6] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={24} className="text-[#d4af37]" />
                <h2 className="font-display text-2xl font-bold">Seu Carrinho</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="flex items-center space-x-1 hover:text-[#d4af37] transition-colors text-sm font-bold uppercase tracking-wider"
              >
                <ArrowLeft size={18} />
                <span>Voltar</span>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-[#d7ccc8] mt-10">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Seu carrinho está vazio.</p>
                </div>
              ) : (
                items.map((item) => {
                  const price = item.product.discount 
                    ? item.product.price * (1 - item.product.discount / 100) 
                    : item.product.price;
                  
                  return (
                    <div key={item.product.id} className="flex gap-4 bg-[#3e2723] p-4 rounded-2xl shadow-sm border border-[#5d4037]">
                      <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-xl" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-[#fdf5e6] line-clamp-1">{item.product.name}</h4>
                          <p className="text-[#d4af37] font-bold">R$ {price.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-3 bg-[#2a1a14] rounded-full px-2 py-1">
                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-[#d7ccc8] hover:text-[#d4af37]">
                              <Minus size={16} />
                            </button>
                            <span className="font-bold text-[#fdf5e6] w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-[#d7ccc8] hover:text-[#d4af37]">
                              <Plus size={16} />
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(item.product.id)} className="text-red-400 hover:text-red-600 text-sm font-medium">
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              {/* Checkout Options */}
              {items.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#5d4037]">
                  <h3 className="font-bold text-[#fdf5e6] mb-4">Opções de Entrega</h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => { setDeliveryMethod("buscar"); setCity(null); setAddress(""); }}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        deliveryMethod === "buscar" 
                          ? "border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]" 
                          : "border-[#5d4037] text-[#d7ccc8] hover:border-[#d4af37]/50"
                      }`}
                    >
                      <Store size={24} className="mb-2" />
                      <span className="font-bold text-sm">Vou Buscar</span>
                    </button>
                    <button
                      onClick={() => setDeliveryMethod("tele")}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        deliveryMethod === "tele" 
                          ? "border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]" 
                          : "border-[#5d4037] text-[#d7ccc8] hover:border-[#d4af37]/50"
                      }`}
                    >
                      <MapPin size={24} className="mb-2" />
                      <span className="font-bold text-sm">Tele Entrega</span>
                    </button>
                  </div>

                  {deliveryMethod === "tele" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-4">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setCity("gramado")}
                          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                            city === "gramado" ? "bg-[#d4af37] text-[#2d1b15]" : "bg-[#3e2723] text-[#d7ccc8] border border-[#5d4037]"
                          }`}
                        >
                          Gramado
                        </button>
                        <button
                          onClick={() => setCity("canela")}
                          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                            city === "canela" ? "bg-[#d4af37] text-[#2d1b15]" : "bg-[#3e2723] text-[#d7ccc8] border border-[#5d4037]"
                          }`}
                        >
                          Canela
                        </button>
                      </div>

                      {city && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <label className="block text-sm font-bold text-[#fdf5e6] mb-2">Endereço Completo</label>
                          <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Rua, Número, Bairro, Complemento..."
                            className="w-full p-3 rounded-xl border border-[#5d4037] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none resize-none h-24 bg-[#3e2723] text-[#fdf5e6]"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-[#3e2723] border-t border-[#5d4037]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#d7ccc8] font-medium">Subtotal</span>
                  <span className="font-bold text-[#fdf5e6] text-xl">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {deliveryMethod === "tele" && (
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-[#d7ccc8]">Frete</span>
                    <span className="font-bold text-[#d4af37]">A combinar</span>
                  </div>
                )}
                <button
                  onClick={handleCheckout}
                  disabled={!isCheckoutValid}
                  className={`w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all flex justify-center items-center space-x-2 ${
                    isCheckoutValid 
                      ? "bg-[#d4af37] text-[#2d1b15] hover:bg-[#fdf5e6] shadow-xl" 
                      : "bg-[#5d4037] text-[#d7ccc8] cursor-not-allowed"
                  }`}
                >
                  <span>Finalizar Compra</span>
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/catalogo');
                  }}
                  className="mt-3 w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all flex justify-center items-center text-[#fdf5e6] border-2 border-[#5d4037] hover:bg-[#5d4037] hover:text-[#d4af37]"
                >
                  Continuar Comprando
                </button>
                {!isCheckoutValid && (
                  <p className="text-center text-xs text-red-400 mt-4">
                    Preencha as informações de entrega para finalizar.
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
