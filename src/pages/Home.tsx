import { motion } from "motion/react";
import { EasterCarousel } from "../components/EasterCarousel";
import { ArrowRight, Leaf, Heart, Award, Instagram, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/K85nzzZY/download-(5).jpg"
            alt="Casa Vecchia Chocolates"
            className="w-full h-full object-cover blur-[3px] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1a100c]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            className="mb-8 relative"
          >
            <img 
              src="https://i.postimg.cc/6pLjwYkb/Design-Sem-Nome-1-Editado.png" 
              alt="Casa Vecchia Chocolates" 
              className="w-72 md:w-[32rem] relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#fdf5e6]/90 mb-10 font-light max-w-2xl mx-auto"
          >
            Descubra sabores únicos em nossa loja. Produzimos nosso próprio chocolate com ingredientes selecionados e muito amor.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-widest text-[#2d1b15] bg-[#d4af37] rounded-full hover:bg-[#fdf5e6] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
            >
              Ver Catálogo
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Easter Carousel Section */}
      <EasterCarousel />

      {/* Story Section */}
      <section id="historia" className="py-24 bg-[#1a100c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src="https://i.postimg.cc/Gpryn1YW/Livro-de-Receitas-de-Ovos-de-Pascoa-Receitas-Irresistiveis-para-uma-Pascoa-Doce-e-Memoravel.jpg"
                  alt="Produção de Chocolate"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37] rounded-full mix-blend-multiply opacity-20 blur-3xl z-0"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#5d4037] rounded-full mix-blend-multiply opacity-10 blur-3xl z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#fdf5e6] mb-6">
                  Produção Própria
                </h2>
                <p className="text-[#d7ccc8] text-lg leading-relaxed mb-6">
                  Nós não apenas vendemos chocolate, nós o fabricamos. Somos profissionais apaixonados pela arte de criar nosso próprio chocolate, garantindo um padrão de excelência e sabor inigualável em cada pedaço.
                </p>
                <p className="text-[#bcaaa4] leading-relaxed">
                  Além da nossa loja principal, temos o orgulho de estar presentes com um quiosque exclusivo no <strong>Skyglass Canela</strong>, levando nossa qualidade premium para um dos pontos turísticos mais incríveis da região.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-8 border-t border-[#3e2723]">
                <div className="text-center space-y-4">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-[#3e2723] rounded-full flex items-center justify-center text-[#d4af37] shadow-lg"
                  >
                    <Leaf className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                  </motion.div>
                  <h4 className="font-bold text-[#fdf5e6] text-base sm:text-xl md:text-3xl">Puro Cacau</h4>
                </div>
                <div className="text-center space-y-4">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-[#3e2723] rounded-full flex items-center justify-center text-[#d4af37] shadow-lg"
                  >
                    <Heart className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                  </motion.div>
                  <h4 className="font-bold text-[#fdf5e6] text-base sm:text-xl md:text-3xl">Artesanal</h4>
                </div>
                <div className="text-center space-y-4">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-[#3e2723] rounded-full flex items-center justify-center text-[#d4af37] shadow-lg"
                  >
                    <Award className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                  </motion.div>
                  <h4 className="font-bold text-[#fdf5e6] text-base sm:text-xl md:text-3xl">Premium</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#1a100c] relative border-t border-[#2d1b15]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#fdf5e6] mb-4">
              Fale <span className="text-[#d4af37] italic">Conosco</span>
            </h2>
            <p className="text-[#d7ccc8] text-lg">Estamos sempre prontos para atender você com muito carinho.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/5554981443334" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#3e2723] border border-[#d4af37]/20 p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-[#2d1b15] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md relative z-10">
                <motion.div animate={{ rotate: [0, -15, 15, -15, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                  <MessageCircle size={36} className="text-[#d4af37]" />
                </motion.div>
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-[#fdf5e6] mb-2 relative z-10">WhatsApp</h3>
              <p className="text-[#d7ccc8] font-medium text-lg lg:text-xl mb-3 relative z-10">+55 54 98144-3334</p>
              <div className="bg-[#2d1b15]/50 px-4 py-2 rounded-full relative z-10 mt-auto">
                <p className="text-[#bcaaa4] text-xs uppercase tracking-widest font-bold">Faça sua encomenda</p>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/casavecchiachocolates/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#3e2723] border border-[#d4af37]/20 p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-[#2d1b15] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md relative z-10">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                  <Instagram size={36} className="text-[#d4af37]" />
                </motion.div>
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-[#fdf5e6] mb-2 relative z-10">Instagram</h3>
              <p className="text-[#d7ccc8] font-medium text-lg lg:text-xl mb-3 relative z-10">@casavecchia</p>
              <div className="bg-[#2d1b15]/50 px-4 py-2 rounded-full relative z-10 mt-auto">
                <p className="text-[#bcaaa4] text-xs uppercase tracking-widest font-bold">Siga as novidades</p>
              </div>
            </a>

            {/* Address Card */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=R.+Severino+Inocente+Zini,+290+-+Jardim+Mariana,+Canela+-+RS,+95688-190" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#3e2723] border border-[#d4af37]/20 p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-[#2d1b15] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md relative z-10">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <MapPin size={36} className="text-[#d4af37]" />
                </motion.div>
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-[#fdf5e6] mb-2 relative z-10">Endereço</h3>
              <p className="text-[#d7ccc8] font-medium text-sm lg:text-base mb-3 relative z-10">R. Severino Inocente Zini, 290<br/>Canela - RS</p>
              <div className="bg-[#2d1b15]/50 px-4 py-2 rounded-full relative z-10 mt-auto">
                <p className="text-[#bcaaa4] text-xs uppercase tracking-widest font-bold">Ver no Mapa</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#150d0a] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
            Pronto para se deliciar?
          </h2>
          <p className="text-[#fdf5e6] text-lg mb-10">
            Explore nosso catálogo completo e encontre o chocolate perfeito para você ou para presentear quem você ama.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold uppercase tracking-widest text-[#2d1b15] bg-[#fdf5e6] rounded-full hover:bg-[#d4af37] transition-all duration-300 transform hover:scale-105"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}
