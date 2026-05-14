export type Product = {
  slug: string;
  ref: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "05bref",
    ref: "05BREF",
    name: "Manija Multiusos 05B",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de medias con la ayuda de un soporte de cartón.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref05b_2.jpg",
    ],
    featured: true,
  },
  {
    slug: "12-10ref",
    ref: "12-10REF",
    name: "Gancho Infantil 12-10",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_10_1-1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_10_33.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref12_10_T.jpg",
    ],
    featured: true,
  },
  {
    slug: "12cref",
    ref: "12CREF",
    name: "Gancho Infantil 12C",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12C_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_30.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Sin_titulo_1.png",
    ],
  },
  {
    slug: "12ref",
    ref: "12REF",
    name: "Gancho Infantil 12",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_3.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref3.png",
    ],
    featured: true,
  },
  {
    slug: "13aref",
    ref: "13AREF",
    name: "Gancho Infantil 13A",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_13A_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_34.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref11.png",
    ],
  },
  {
    slug: "13ref",
    ref: "13REF",
    name: "Gancho Infantil 13",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_13_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_33.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref13_T.jpg",
    ],
  },
  {
    slug: "ref-24a-cabeza-metalica",
    ref: "REF 24A",
    name: "Gancho Cabeza Metálica 24A",
    category: "infantil",
    description:
      "Cabeza metálica — Ideal para exhibir toda clase de prendas inferiores como pantalones, sudaderas, pantalonetas, shorts y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_24A_Cabeza_Metalica_1.png",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref13.png",
    ],
    featured: true,
  },
  {
    slug: "ref-30a-cabeza-metalica",
    ref: "REF 30A",
    name: "Gancho Cabeza Metálica 30A",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30A_Cabeza_Metalica_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30A_Cabeza_Metalica_2.jpg",
    ],
    featured: true,
  },
  {
    slug: "ref-35-a-cabeza-metalica",
    ref: "REF 35A",
    name: "Gancho Cabeza Metálica 35A",
    category: "adulto",
    description:
      "Cabeza metálica — Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A_Cabeza_Metalica.png",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A_Cabeza_Metalica_2.jpg",
    ],
  },
  {
    slug: "ref-rectangular-box",
    ref: "REF BOX",
    name: "Caja Rectangular Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibir toda clase de prendas medianas y pequeñas, en una o varias unidades. Ideal para utilizar con la manija 07L.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Caja_rectangular.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/cajaRectangular_2.jpg",
    ],
  },
  {
    slug: "ref-lv1",
    ref: "REF-LV1",
    name: "Gancho Lavandería LV1",
    category: "lavanderia",
    description: "Gancho de lavandería resistente — descripción pendiente. Consultar con cliente.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/REF-LV1.jpg.jpeg",
    ],
  },
  {
    slug: "ref-lv5",
    ref: "REF-LV5",
    name: "Gancho Lavandería LV5",
    category: "lavanderia",
    description: "Gancho de lavandería resistente — descripción pendiente. Consultar con cliente.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/REF-LV5.jpg.jpeg",
    ],
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, category: string): Product[] {
  return products.filter((p) => p.category === category && p.slug !== slug).slice(0, 4);
}
