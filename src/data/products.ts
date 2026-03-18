export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isEaster: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ovo Trufado",
    description: "Meio ovo de chocolate ao leite recheado com trufa de maracujá e decorado com raspas.",
    price: 89.90,
    image: "https://i.postimg.cc/YqHGWHnV/ovo-trufado-600g.jpg",
    isEaster: true,
    discount: 15,
  },
  {
    id: "2",
    name: "Ovo de Colher",
    description: "Lindo ovo de colher recheado com brigadeiro gourmet e decorado com confeitos.",
    price: 95.00,
    image: "https://i.postimg.cc/KYRR2vj5/doces-e-mimos-gourmet-70-copy-scaled.jpg",
    isEaster: true,
    discount: 15,
  },
  {
    id: "3",
    name: "Cesta de Páscoa",
    description: "Cesta recheada com mini ovos, trufas sortidas e um coelho de chocolate.",
    price: 150.00,
    image: "https://i.postimg.cc/pL7PKQV0/cesta-ovo-de-pascoa-1-npqmxc.webp",
    isEaster: true,
    discount: 15,
  },
  {
    id: "4",
    name: "Ovo Crocante de Nutella",
    description: "Ovo de chocolate ao leite com casca recheada de Nutella e avelãs crocantes.",
    price: 110.00,
    image: "https://picsum.photos/seed/easter4/600/600",
    isEaster: true,
    discount: 15,
  },
  {
    id: "5",
    name: "Barra de Chocolate Intenso",
    description: "Barra de chocolate 70% cacau com flor de sal.",
    price: 25.00,
    image: "https://picsum.photos/seed/choco1/600/600",
    isEaster: false,
  },
  {
    id: "6",
    name: "Caixa de Trufas Sortidas",
    description: "Caixa com 12 trufas artesanais nos sabores: morango, limão siciliano, tradicional e café.",
    price: 65.00,
    image: "https://picsum.photos/seed/choco2/600/600",
    isEaster: false,
  },
  {
    id: "7",
    name: "Bombons Finos",
    description: "Caixa com 24 bombons finos decorados à mão.",
    price: 120.00,
    image: "https://picsum.photos/seed/choco3/600/600",
    isEaster: false,
  },
  {
    id: "8",
    name: "Chocolate Quente Cremoso",
    description: "Mistura especial para preparo de chocolate quente cremoso tipo europeu.",
    price: 35.00,
    image: "https://picsum.photos/seed/choco4/600/600",
    isEaster: false,
  }
];
