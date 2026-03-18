import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { products } from "../data/products";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export function EasterCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  
  const easterProducts = products.filter((p) => ["1", "2", "3"].includes(p.id));

  // Auto-scroll logic (3 seconds)
  useEffect(() => {
    if (isHovered || isDragging) return;
    
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        
        // If reached the end, scroll back to start smoothly
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width approximately
          const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 350;
          containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragDistance(0);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
      containerRef.current.style.scrollBehavior = 'auto';
      containerRef.current.style.scrollSnapType = 'none';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = 'smooth';
      containerRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = 'smooth';
      containerRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    setDragDistance(Math.abs(walk));
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Prevent accidental clicks when dragging
  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragDistance > 15) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://i.postimg.cc/fLpkH4vT/0ce1088abee4baa2413d8f8dc6e86b22.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay to ensure text readability over the background image */}
      <div className="absolute inset-0 bg-[#1a100c]/60 backdrop-blur-[15px] z-0"></div>
      
      {/* Top and Bottom Gradients to blend with adjacent sections */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#1a100c] via-[#1a100c]/80 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1a100c] to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-2xl relative">
            {/* Cute Easter Bunny SVG peeking */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              className="absolute -top-20 -left-12 md:-left-20 w-24 h-24 md:w-32 md:h-32 -z-10 opacity-80"
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" stroke="#5d4037" strokeWidth="4" d="M100,180 C140,180 170,140 170,100 C170,60 140,40 100,40 C60,40 30,60 30,100 C30,140 60,180 100,180 Z" />
                <path fill="#ffffff" stroke="#5d4037" strokeWidth="4" d="M60,50 C50,20 70,10 80,30 C85,40 75,55 60,50 Z" />
                <path fill="#ffffff" stroke="#5d4037" strokeWidth="4" d="M140,50 C150,20 130,10 120,30 C115,40 125,55 140,50 Z" />
                <circle cx="75" cy="90" r="8" fill="#2d1b15" />
                <circle cx="125" cy="90" r="8" fill="#2d1b15" />
                <path fill="none" stroke="#2d1b15" strokeWidth="4" strokeLinecap="round" d="M90,110 Q100,120 110,110" />
                <circle cx="100" cy="105" r="5" fill="#ff9999" />
              </svg>
            </motion.div>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#fdf5e6] mb-4 drop-shadow-sm">
              Especial de <span className="text-[#d4af37] italic">Páscoa</span>
            </h2>
            <p className="text-[#fdf5e6]/90 text-lg md:text-xl font-medium">
              O coelhinho preparou delícias exclusivas. Deslize e descubra a magia do nosso chocolate artesanal.
            </p>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <Link
              to="/catalogo"
              className="inline-flex items-center space-x-2 bg-[#d4af37] text-[#2d1b15] px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#fdf5e6] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Ver Catálogo</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onClickCapture={handleClickCapture}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsHovered(false), 2000);
            }}
            className={`flex overflow-x-auto lg:justify-center gap-4 md:gap-6 pb-16 pt-4 px-4 md:px-8 -mx-4 md:-mx-8 hide-scrollbar snap-x snap-mandatory ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollBehavior: 'smooth' }}
          >
            {easterProducts.map((product, index) => (
              <div key={product.id} className="w-[85vw] sm:w-[300px] lg:w-[350px] snap-center flex-shrink-0">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center -mt-8 space-y-8 relative z-30">
            <div className="flex items-center space-x-2 text-[#fdf5e6] bg-[#2d1b15]/80 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm lg:hidden">
              <MoveHorizontal size={16} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Deslize para ver mais</span>
            </div>
            
            <Link
              to="/catalogo"
              className="inline-flex items-center space-x-2 bg-[#d4af37] text-[#1a100c] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#fdf5e6] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.2)] whitespace-nowrap"
            >
              <span>Catálogo Completo</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
