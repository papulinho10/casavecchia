import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#150d0a] text-[#fdf5e6] pt-16 pb-8 border-t-4 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold tracking-widest text-[#d4af37]">
              CASA VECCHIA
            </h3>
            <p className="text-sm text-[#8d6e63] max-w-xs leading-relaxed">
              Produzindo o próprio chocolate com paixão, tradição e os melhores ingredientes para adoçar sua vida.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold uppercase tracking-widest text-[#d4af37] text-sm">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#8d6e63]">
              <li><a href="/" className="hover:text-[#fdf5e6] transition-colors">Início</a></li>
              <li><a href="/catalogo" className="hover:text-[#fdf5e6] transition-colors">Catálogo de Produtos</a></li>
              <li><a href="/#historia" className="hover:text-[#fdf5e6] transition-colors">Nossa História</a></li>
              <li><a href="/#contato" className="hover:text-[#fdf5e6] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4" id="contato">
            <h4 className="font-sans font-semibold uppercase tracking-widest text-[#d4af37] text-sm">
              Fale Conosco
            </h4>
            <ul className="space-y-3 text-sm text-[#8d6e63]">
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-[#d4af37]" />
                <a href="https://wa.me/5554981443334" target="_blank" rel="noopener noreferrer" className="hover:text-[#fdf5e6] transition-colors">
                  +55 54 98144-3334
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram size={18} className="text-[#d4af37]" />
                <a href="https://www.instagram.com/casavecchiachocolates/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fdf5e6] transition-colors">
                  @casavecchiachocolates
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#d4af37]" />
                <span>Rua do Chocolate, 123 - Serra Gaúcha</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5d4037] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8d6e63]">
          <p>&copy; {new Date().getFullYear()} Casa Vecchia Chocolates. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-[#fdf5e6] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[#fdf5e6] transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
