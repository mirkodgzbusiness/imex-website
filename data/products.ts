export type Product = {
  slug: string;
  ref: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  featured?: boolean;
  thumbnailLabels?: string[];
};

export function formatProductRef(ref: string): string {
  const trimmed = ref.trim();

  if (/^REF[\s-]/i.test(trimmed)) {
    const code = trimmed.replace(/^REF[\s-]+/i, "").trim();
    return code ? `REF ${code}` : trimmed.toUpperCase();
  }

  if (/REF$/i.test(trimmed)) {
    const code = trimmed.slice(0, -3).trim();
    return `REF ${code}`;
  }

  return `REF ${trimmed}`;
}

export function slugifyProductText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProductLabel(product: Product): string {
  return `${formatProductRef(product.ref)} — ${product.name}`;
}

export const products: Product[] = [
  {
    slug: "manija-multiusos",
    ref: "05BREF",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de medias con la ayuda de un soporte de cartón.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref05b_2.jpg",
    ],
    thumbnailLabels: ["", "Manual de uso"],
    featured: true,
  },
  {
    slug: "gancho-infantil-12-10",
    ref: "12-10REF",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_10_1-1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref12_10_T.jpg",
    ],
    featured: true,
  },
  {
    slug: "gancho-infantil-12c",
    ref: "12CREF",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12C_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Sin_titulo_1.png",
    ],
  },
  {
    slug: "gancho-infantil-12",
    ref: "12REF",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_12_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref3.png",
    ],
    featured: true,
  },
  {
    slug: "gancho-infantil-13a",
    ref: "13AREF",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_13A_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref11.png",
    ],
  },
  {
    slug: "gancho-infantil-13",
    ref: "13REF",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_13_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref13_T.jpg",
    ],
  },
  {
    slug: "gancho-cabeza-metalica-24a",
    ref: "REF 24A",
    name: "Gancho Cabeza Metálica",
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
    slug: "gancho-cabeza-metalica-30a",
    ref: "REF 30A",
    name: "Gancho Cabeza Metálica",
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
    slug: "gancho-cabeza-metalica-35a",
    ref: "REF 35A",
    name: "Gancho Cabeza Metálica",
    category: "adulto",
    description:
      "Cabeza metálica — Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A_Cabeza_Metalica.png",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A_Cabeza_Metalica_2.jpg",
    ],
  },
  {
    slug: "caja-rectangular-multiusos",
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
    slug: "gancho-pinza-infantil-10",
    ref: "REF10",
    name: "Gancho Pinza Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalonetas y sudaderas con pretina o resorte. Sus largas pinzas permiten un excelente agarre de las prendas, evitando que se descuelguen. Complemento ideal para el gancho REF 12.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_10_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_10_2.png",
    ],
  },
  {
    slug: "gancho-pinza-infantil-10a",
    ref: "REF10A",
    name: "Gancho Pinza Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalonetas y sudaderas con pretina o resorte. Sus largas pinzas permiten un excelente agarre de las prendas, evitando que se descuelguen. Complemento ideal para el gancho REF 12.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_10A_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_10A_2.png",
    ],
  },
  {
    slug: "gancho-infantil-11",
    ref: "REF11",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11.png",
    ],
  },
  {
    slug: "gancho-infantil-11-10a",
    ref: "REF11-10A",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_10A_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref2.png",
    ],
  },
  {
    slug: "gancho-infantil-11-10a-2",
    ref: "REF11-10A-2",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir conjuntos. Medidas ideales que permiten un modelado perfecto de las prendas exhibidas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_10A_2_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref11_10a_2_T.jpg",
    ],
  },
  {
    slug: "gancho-infantil-11-5",
    ref: "REF11-5",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para promociones, permite exhibir cinco prendas como camisas y camisetas (bodies).",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_5_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11_5_2.jpg",
    ],
  },
  {
    slug: "gancho-infantil-11a",
    ref: "REF11A",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para promociones, permite exhibir tres prendas como camisas y camisetas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11A_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11A_2.jpg",
    ],
  },
  {
    slug: "gancho-infantil-11b",
    ref: "REF11B",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11B_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11B_2.jpg",
    ],
  },
  {
    slug: "gancho-infantil-11c",
    ref: "REF11C",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_11C_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref0.png",
    ],
  },
  {
    slug: "gancho-infantil-14",
    ref: "REF14",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas infantiles como camisetas, camisas, busos y pantalones.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_14_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_14_2.jpg",
    ],
  },
  {
    slug: "gancho-pinza-infantil-24b",
    ref: "REF24B",
    name: "Gancho Pinza Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir toda clase de prendas inferiores como pantalones, sudaderas, pantalonetas, shorts y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_24B_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/24B.png",
    ],
  },
  {
    slug: "gancho-pinza-infantil-24c",
    ref: "REF24C",
    name: "Gancho Pinza Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir toda clase de prendas inferiores como pantalones, sudaderas, pantalonetas, shorts y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_24C_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/24C.png",
    ],
  },
  {
    slug: "gancho-infantil-498",
    ref: "REF498",
    name: "Gancho Infantil",
    category: "infantil",
    description:
      "Ideal para exhibir prendas superiores como camisetas, camisas, enterizos y busos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_498_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_498_2.jpg",
    ],
  },
  {
    slug: "gancho-junior-15a",
    ref: "REF15A",
    name: "Gancho Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos y blusas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_15A_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_15A_2.jpg",
    ],
  },
  {
    slug: "gancho-pinza-junior-15c",
    ref: "REF15C",
    name: "Gancho Pinza Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalonetas y sudaderas con pretina o resorte. Sus largas pinzas permiten un excelente agarre de las prendas, evitando que se descuelguen.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_15C_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_15C_2.jpg",
    ],
  },
  {
    slug: "gancho-junior-16",
    ref: "REF16",
    name: "Gancho Junior",
    category: "junior",
    description: "Ideal para exhibir pijamas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_16_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Red_16_1.png",
    ],
  },
  {
    slug: "gancho-cabeza-metalica-junior-25a",
    ref: "REF25A",
    name: "Gancho Cabeza Metálica Junior",
    category: "junior",
    description:
      "Cabeza metálica — Ideal para exhibir prendas inferiores como pantalones, pantalonetas, jeans, sudaderas y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref250.png",
      "https://imporexporperu.com/wp-content/uploads/2019/03/25Cm.png",
    ],
  },
  {
    slug: "gancho-pinza-junior-25b",
    ref: "REF25B",
    name: "Gancho Pinza Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalonetas, jeans, sudaderas y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_25B_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref25.png",
    ],
  },
  {
    slug: "gancho-pinza-junior-25bp-l",
    ref: "REF25BP-L",
    name: "Gancho Pinza Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalones de baño, jeans, sudaderas y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_25BP_L_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_25BP_L_2.jpg",
    ],
  },
  {
    slug: "gancho-junior-485",
    ref: "REF485",
    name: "Gancho Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos y blusas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_485_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/485.png",
    ],
  },
  {
    slug: "gancho-junior-489",
    ref: "REF489",
    name: "Gancho Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, jeans, sudaderas, shorts y faldas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_489_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_489_2.jpg",
    ],
  },
  {
    slug: "gancho-pinza-junior-9",
    ref: "REF9",
    name: "Gancho Pinza Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalonetas y sudaderas con pretina o resorte. Sus largas pinzas permiten un excelente agarre de las prendas, evitando que se descuelguen.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_9_10.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_9_3.jpg",
    ],
  },
  {
    slug: "gancho-pinza-junior-9a",
    ref: "REF9A",
    name: "Gancho Pinza Junior",
    category: "junior",
    description:
      "Ideal para exhibir prendas inferiores como pantalones, pantalonetas y sudaderas con pretina o resorte. Sus largas pinzas permiten un excelente agarre de las prendas, evitando que se descuelguen. Complemento ideal para los ganchos REF 15 y 17.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_9A_10.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_9_30.jpg",
    ],
  },
  {
    slug: "gancho-adulto-17",
    ref: "REF17",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos, blusas y tops.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_17_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_17_2.jpg",
    ],
  },
  {
    slug: "gancho-adulto-17a",
    ref: "REF17A",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos, blusas y tops.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_17A_10.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_17A_10-1.jpg",
    ],
  },
  {
    slug: "gancho-adulto-17b",
    ref: "REF17B",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos, blusas y tops. Especial para tejido de punto.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_17B_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/17B.png",
    ],
  },
  {
    slug: "gancho-adulto-17c",
    ref: "REF17C",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos, blusas y tops.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_17C_10.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/17C.png",
    ],
  },
  {
    slug: "gancho-adulto-18a",
    ref: "REF18A",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores, inferiores y conjuntos de ropa masculina y femenina como camisetas, camisas, busos, pantalones y pijamas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_18A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_18A_2.jpg",
    ],
  },
  {
    slug: "gancho-adulto-19a",
    ref: "REF19A",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos, blusas y tops.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_19A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_19A_3.jpg",
    ],
  },
  {
    slug: "gancho-adulto-19b",
    ref: "REF19B",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos, blusas y tops.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_19B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/19B.png",
    ],
  },
  {
    slug: "gancho-pinza-adulto-30a",
    ref: "REF30A",
    name: "Gancho Pinza Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30A_2.jpg",
    ],
  },
  {
    slug: "gancho-pinza-adulto-30b",
    ref: "REF30B",
    name: "Gancho Pinza Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30B.png",
    ],
  },
  {
    slug: "gancho-pinza-adulto-30bp-l",
    ref: "REF30BP-L",
    name: "Gancho Pinza Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores masculina y femenina como pantalones, pantalón de baño, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30BP_L_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_30BP_L_2.jpg",
    ],
  },
  {
    slug: "gancho-adulto-31",
    ref: "REF31",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir trajes completos, vestidos formales y prendas como chaquetas de pana, paño o índigo.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_31.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_31_2_2.jpg",
    ],
  },
  {
    slug: "gancho-adulto-32",
    ref: "REF32",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir trajes completos, vestidos formales y prendas como chaquetas de pana, paño o índigo.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_32.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_32_2.png",
    ],
  },
  {
    slug: "gancho-adulto-33",
    ref: "REF33",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir trajes completos, vestidos formales y prendas como chaquetas de pana, paño o índigo.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref33_1_T.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_32_2.png",
    ],
  },
  {
    slug: "gancho-pinza-adulto-35a",
    ref: "REF35A",
    name: "Gancho Pinza Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_35_31.jpg",
    ],
  },
  {
    slug: "gancho-adulto-484",
    ref: "REF484",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores como camisas, camisetas, busos, chalecos y blusas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_484.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_484.png",
    ],
  },
  {
    slug: "gancho-adulto-484b",
    ref: "REF484B",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores, inferiores y conjuntos de ropa masculina y femenina como camisetas, camisas, busos, pantalones y pijamas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_484B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_484B.png",
    ],
  },
  {
    slug: "gancho-adulto-484bp",
    ref: "REF484BP",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas superiores, inferiores y conjuntos de ropa masculina y femenina como camisetas, camisas, busos, pantalones y pijamas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_484B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_484B.png",
    ],
  },
  {
    slug: "gancho-adulto-487",
    ref: "REF487",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_487.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_487.png",
    ],
  },
  {
    slug: "gancho-adulto-488",
    ref: "REF488",
    name: "Gancho Adulto",
    category: "adulto",
    description:
      "Ideal para exhibir prendas inferiores de ropa exterior masculina y femenina como pantalones, pantalonetas, sudaderas, faldas y shorts.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_488.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_488_2.jpg",
    ],
  },
  {
    slug: "gancho-interior-femenina-2",
    ref: "REF2",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y vestidos de baño.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/2.png",
      "https://imporexporperu.com/wp-content/uploads/2019/03/2_2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-3",
    ref: "REF3",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/3_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/3_2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-3c",
    ref: "REF3C",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/3C1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/3C_2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-4",
    ref: "REF4",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasieres lisos y con encajes.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/4_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/4_2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-4b2",
    ref: "REF4B2",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para promocionar toda clase de prendas íntimas femeninas como brasier, prendas deportivas y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/4b2_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/4b2_2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-4b3",
    ref: "REF4B3",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para promocionar toda clase de prendas íntimas femeninas como panty, prendas deportivas y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/4B3_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/4B3_2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-4s",
    ref: "REF4S",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/4S.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/4S10.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-5",
    ref: "REF5",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/5.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/5_1.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-5a",
    ref: "REF5A",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/5A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/5A1.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-5b",
    ref: "REF5B",
    name: "Gancho Interior Femenina Infantil",
    category: "interior-femenina",
    description:
      "Ideal para exhibir prendas íntimas femeninas infantiles como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/5B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/5B2.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-5b3",
    ref: "REF5B3",
    name: "Gancho Interior Femenina Infantil",
    category: "interior-femenina",
    description:
      "Ideal para promocionar toda clase de prendas íntimas femeninas infantiles como panty, brasier, prendas deportivas y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/5B3.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/5B3.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-5b4",
    ref: "REF5B4",
    name: "Gancho Interior Femenina Infantil",
    category: "interior-femenina",
    description:
      "Ideal para promocionar toda clase de prendas íntimas femeninas infantiles como panty, brasier, prendas deportivas y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/5B4.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/5B4.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-6a",
    ref: "REF6A",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/6A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/6A.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-7",
    ref: "REF7",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/7_1-1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/7-1.png",
    ],
  },
  {
    slug: "gancho-interior-femenina-7e",
    ref: "REF7E",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_7e.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_peq.jpg",
    ],
  },
  {
    slug: "gancho-interior-femenina-8",
    ref: "REF8",
    name: "Gancho Interior Femenina",
    category: "interior-femenina",
    description:
      "Ideal para exhibir toda clase de prendas íntimas femeninas como panty, brasier, prendas deportivas, y ropa interior en general.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/8.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/8_7.png",
    ],
  },
  {
    slug: "gancho-interior-masculino-p12",
    ref: "REFP12",
    name: "Gancho Interior Masculino",
    category: "interior-masculina",
    description:
      "Ideal para exhibir pantaloncillos y boxer. Su tamaño reducido minimiza el espacio de exhibición sin sacrificar la estética de las prendas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/12-1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/12_1.png",
    ],
  },
  {
    slug: "gancho-interior-masculino-p3",
    ref: "REFP3",
    name: "Gancho Interior Masculino Infantil",
    category: "interior-masculina",
    description:
      "Ideal para exhibir prendas interiores infantiles como pantaloncillos y boxer.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/3.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_P3_2.jpg",
    ],
  },
  {
    slug: "gancho-interior-masculino-p7",
    ref: "REFP7",
    name: "Gancho Interior Masculino",
    category: "interior-masculina",
    description:
      "Ideal para exhibir pantaloncillos y boxer. Más económico y más liviano sin perder resistencia y estructura gracias a su diseño cóncavo.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/7.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/7_1.png",
    ],
  },
  {
    slug: "manija-multiusos-01",
    ref: "REF01",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir todo tipo de productos con sujetador o plastiflecha, como medias o gorras.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_01.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-012",
    ref: "REF012",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir calzado para bebé en tallas 15 a 27. Amplia zona de estampados para marcas y logotipos.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_012.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_012_2-1.jpg",
    ],
  },
  {
    slug: "manija-multiusos-012a",
    ref: "REF012A",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibidores, su diseño en forma de viga permite colgar elementos pesados sin deformarse.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_012A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_012A_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-013",
    ref: "REF013",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir toda clase de sandalias.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_013.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_013_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-014",
    ref: "REF014",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir pantuflas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_014.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_016_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-014b",
    ref: "REF014B",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Gancho ideal para exhibir toda clase de calzado.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_014B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_014B_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-014c",
    ref: "REF014C",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Gancho ideal para exhibir toda clase de calzado.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_014C.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_014C_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-015",
    ref: "REF015",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir zapatos de bebé entre las tallas 15 a 27.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_015.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_015_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-016",
    ref: "REF016",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Gancho ideal para exhibir toda clase de calzado.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_016.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_016_20.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-017",
    ref: "REF017",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Gancho ideal para exhibir toda clase de calzado.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_017.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_017_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-018",
    ref: "REF018",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir promociones de medias.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_018.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_018_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-022",
    ref: "REF022",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Ideal para exhibir toda clase de toallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_022.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_022_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-027",
    ref: "REF027",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Ideal para exhibir toda clase de toallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-027a",
    ref: "REF027A",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Ideal para exhibir toda clase de toallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027A_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-027b",
    ref: "REF027B",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Ideal para exhibir toda clase de toallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027B_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-027c",
    ref: "REF027C",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Ideal para exhibir toda clase de toallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027C.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027C_2.jpg",
    ],
  },
  {
    slug: "gancho-multiusos-027d",
    ref: "REF027D",
    name: "Gancho Multiusos",
    category: "multiusos",
    description: "Ideal para exhibir toda clase de toallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027D-1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_027D_2-1.jpg",
    ],
  },
  {
    slug: "manija-multiusos-028",
    ref: "REF028",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir medias.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_028.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_028_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-03d",
    ref: "REF03D",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_03D.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref3d_2.jpg",
    ],
  },
  {
    slug: "accesorio-multiusos-03e",
    ref: "REF03E",
    name: "Accesorio Multiusos",
    category: "multiusos",
    description: "Accesorio ideal para cruzar por la espalda las tiras del brasier.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_03E.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/refed_2.jpg",
    ],
  },
  {
    slug: "accesorio-multiusos-03f",
    ref: "REF03F",
    name: "Accesorio Multiusos",
    category: "multiusos",
    description: "Accesorio ideal para cruzar por la espalda las tiras del brasier.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_03F.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref03f_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-04",
    ref: "REF04",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de medias y calcetines por pares.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04_1-1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04_2-1.jpg",
    ],
  },
  {
    slug: "manija-multiusos-04a",
    ref: "REF04A",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir prendas pequeñas dobladas como boxer y leggins en todas las tallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04a_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04a_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-04a-2",
    ref: "REF04A-2",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibir prendas pequeñas dobladas, como medias, leggins, pantaloncillos y boxer en todas las tallas, en presentación doble.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04a_2_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04a_2_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-04b",
    ref: "REF04B",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de medias y calcetines por pares.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_04B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04b_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-04c",
    ref: "REF04C",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir prendas pequeñas dobladas como boxer y leggins en todas las tallas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04c_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04c_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-04c-2",
    ref: "REF04C-2",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibir prendas pequeñas dobladas, como medias, leggins, pantaloncillos y boxer en doble presentación.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04c_2_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref04c_2_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-05a",
    ref: "REF05A",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir todo tipo de medias con la ayuda de un cartón ajustado a la prenda.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref05a_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-05c",
    ref: "REF05C",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir promociones de medias.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05C.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05C_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-05d",
    ref: "REF05D",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir promociones de medias.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_05D.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref05d_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-06",
    ref: "REF06",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir prendas y productos pesados, preempacados en bolsas de PVC.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_06.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref06_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07b",
    ref: "REF07B",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07B.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07b_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07c",
    ref: "REF07C",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07C.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07c_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07d",
    ref: "REF07D",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07D.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07d_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07e",
    ref: "REF07E",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a bolsas de polietileno y polipropileno, y puede usarse en cajas y bolsas de PVC.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07E.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07e_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07g",
    ref: "REF07G",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07G.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07g_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07h",
    ref: "REF07H",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07H.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07h_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07j",
    ref: "REF07J",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07J.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07j_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07k",
    ref: "REF07K",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07K.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07K_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07l",
    ref: "REF07L",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07L.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07l_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07p",
    ref: "REF07P",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07P.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07p_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07r",
    ref: "RREF07",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio. Se adhiere mediante calor a cualquier bolsa de polietileno y polipropileno.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07R.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/refo7_2_T.jpg",
    ],
  },
  {
    slug: "manija-multiusos-07s",
    ref: "REF07S",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir toda clase de artículos preempacados de tamaño y peso medio.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_07S.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref07s_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-08",
    ref: "REF08",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir cinturones y correas. Se adapta a todo tipo de hebillas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_08.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref8_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-08-2",
    ref: "REF08-2",
    name: "Manija Multiusos",
    category: "multiusos",
    description:
      "Manija ideal para exhibir dos cinturones y correas. Se adapta a todo tipo de hebillas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_08_2.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref08_2_2.jpg",
    ],
  },
  {
    slug: "manija-multiusos-10a",
    ref: "REF10A",
    name: "Manija Multiusos",
    category: "multiusos",
    description: "Manija ideal para exhibir toda clase de bufandas.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/Ref_010A.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/ref10a_2.jpg",
    ],
  },
  {
    slug: "caja-multiusos-2",
    ref: "REFBox 2",
    name: "Caja Multiusos",
    category: "multiusos",
    description:
      "Ideal para exhibir toda clase de prendas medianas y pequeñas, en una o varias unidades. Ideal para utilizar con la manija 07L.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/caja_1.jpg",
      "https://imporexporperu.com/wp-content/uploads/2019/03/caja_2.jpg",
    ],
  },
  {
    slug: "gancho-lavanderia-lv1",
    ref: "REF-LV1",
    name: "Gancho Lavandería",
    category: "lavanderia",
    description: "Gancho de lavandería resistente — descripción pendiente. Consultar con cliente.",
    images: [
      "https://imporexporperu.com/wp-content/uploads/2019/03/REF-LV1.jpg.jpeg",
    ],
  },
  {
    slug: "gancho-lavanderia-lv5",
    ref: "REF-LV5",
    name: "Gancho Lavandería",
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

export function getFeaturedProducts(min = 8): Product[] {
  const marked = products.filter((p) => p.featured);
  if (marked.length >= min) return marked;

  const markedSlugs = new Set(marked.map((p) => p.slug));
  const filler = products.filter((p) => !markedSlugs.has(p.slug));
  return [...marked, ...filler].slice(0, min);
}

const legacyProductSlugs: Record<string, string> = {
  "05bref": "manija-multiusos",
  "12-10ref": "gancho-infantil-12-10",
  "12cref": "gancho-infantil-12c",
  "12ref": "gancho-infantil-12",
  "13aref": "gancho-infantil-13a",
  "13ref": "gancho-infantil-13",
  "ref-24a-cabeza-metalica": "gancho-cabeza-metalica-24a",
  "ref-30a-cabeza-metalica": "gancho-cabeza-metalica-30a",
  "ref-35-a-cabeza-metalica": "gancho-cabeza-metalica-35a",
  "ref-rectangular-box": "caja-rectangular-multiusos",
  "ref-lv1": "gancho-lavanderia-lv1",
  "ref-lv5": "gancho-lavanderia-lv5",
  "10ref": "gancho-pinza-infantil-10",
  "10refa": "gancho-pinza-infantil-10a",
  "11ref": "gancho-infantil-11",
  "11-10aref": "gancho-infantil-11-10a",
  "11-10a-2ref": "gancho-infantil-11-10a-2",
  "11-5ref": "gancho-infantil-11-5",
  "11refa": "gancho-infantil-11a",
  "11bref": "gancho-infantil-11b",
  "11cref": "gancho-infantil-11c",
  "14ref": "gancho-infantil-14",
  "24bref": "gancho-pinza-infantil-24b",
  "24cref": "gancho-pinza-infantil-24c",
  "498ref": "gancho-infantil-498",
  "15aref": "gancho-junior-15a",
  "15cref": "gancho-pinza-junior-15c",
  "16ref": "gancho-junior-16",
  "ref25a": "gancho-cabeza-metalica-junior-25a",
  "25bref": "gancho-pinza-junior-25b",
  "25bp-lref": "gancho-pinza-junior-25bp-l",
  "485ref": "gancho-junior-485",
  "489ref": "gancho-junior-489",
  "9ref": "gancho-pinza-junior-9",
  "9refa": "gancho-pinza-junior-9a",
  "17ref": "gancho-adulto-17",
  "17refa": "gancho-adulto-17a",
  "17refb": "gancho-adulto-17b",
  "17cref": "gancho-adulto-17c",
  "18aref": "gancho-adulto-18a",
  "19aref": "gancho-adulto-19a",
  "19bref": "gancho-adulto-19b",
  "30aref": "gancho-pinza-adulto-30a",
  "30bref": "gancho-pinza-adulto-30b",
  "30bp-lref": "gancho-pinza-adulto-30bp-l",
  "31ref": "gancho-adulto-31",
  "32ref": "gancho-adulto-32",
  "33ref": "gancho-adulto-33",
  "35aref": "gancho-pinza-adulto-35a",
  "484ref": "gancho-adulto-484",
  "484bref": "gancho-adulto-484b",
  "484bpref": "gancho-adulto-484bp",
  "487ref": "gancho-adulto-487",
  "488ref": "gancho-adulto-488",
  "2ref": "gancho-interior-femenina-2",
  "3ref": "gancho-interior-femenina-3",
  "3cref": "gancho-interior-femenina-3c",
  "4ref": "gancho-interior-femenina-4",
  "4b2ref": "gancho-interior-femenina-4b2",
  "4b3ref": "gancho-interior-femenina-4b3",
  "4sref": "gancho-interior-femenina-4s",
  "5ref": "gancho-interior-femenina-5",
  "5aref": "gancho-interior-femenina-5a",
  "5bref": "gancho-interior-femenina-5b",
  "5b3ref": "gancho-interior-femenina-5b3",
  "5b4ref": "gancho-interior-femenina-5b4",
  "6aref": "gancho-interior-femenina-6a",
  "ref7": "gancho-interior-femenina-7",
  "7eref": "gancho-interior-femenina-7e",
  "8ref": "gancho-interior-femenina-8",
  "p12ref": "gancho-interior-masculino-p12",
  "p3ref": "gancho-interior-masculino-p3",
  "p7ref": "gancho-interior-masculino-p7",
  "01ref": "manija-multiusos-01",
  "012ref": "manija-multiusos-012",
  "012aref": "manija-multiusos-012a",
  "013ref": "manija-multiusos-013",
  "014ref": "manija-multiusos-014",
  "014bref": "gancho-multiusos-014b",
  "014cref": "gancho-multiusos-014c",
  "015ref": "manija-multiusos-015",
  "016ref": "gancho-multiusos-016",
  "017ref": "gancho-multiusos-017",
  "018ref": "manija-multiusos-018",
  "022ref": "gancho-multiusos-022",
  "027ref": "gancho-multiusos-027",
  "027aref": "gancho-multiusos-027a",
  "027bref": "gancho-multiusos-027b",
  "027cref": "gancho-multiusos-027c",
  "027dref": "gancho-multiusos-027d",
  "028ref": "manija-multiusos-028",
  "03dref": "manija-multiusos-03d",
  "03eref": "accesorio-multiusos-03e",
  "03fref": "accesorio-multiusos-03f",
  "04ref-2": "manija-multiusos-04",
  "04ref": "manija-multiusos-04a",
  "04a-2ref": "manija-multiusos-04a-2",
  "04bref": "manija-multiusos-04b",
  "04cref": "manija-multiusos-04c",
  "04c-2ref": "manija-multiusos-04c-2",
  "05aref": "manija-multiusos-05a",
  "05cref": "manija-multiusos-05c",
  "05dref": "manija-multiusos-05d",
  "06ref": "manija-multiusos-06",
  "07bref": "manija-multiusos-07b",
  "07cref": "manija-multiusos-07c",
  "07dref": "manija-multiusos-07d",
  "07eref": "manija-multiusos-07e",
  "07gref": "manija-multiusos-07g",
  "07href": "manija-multiusos-07h",
  "07jref": "manija-multiusos-07j",
  "07kref": "manija-multiusos-07k",
  "07lref": "manija-multiusos-07l",
  "07pref": "manija-multiusos-07p",
  "07rref": "manija-multiusos-07r",
  "07sref": "manija-multiusos-07s",
  "08ref": "manija-multiusos-08",
  "ref08-2": "manija-multiusos-08-2",
  "ref10a": "manija-multiusos-10a",
  "box-2ref": "caja-multiusos-2",
};

export function getProductBySlug(slug: string): Product | undefined {
  const normalizedSlug = legacyProductSlugs[slug] ?? slug;
  return products.find((p) => p.slug === normalizedSlug);
}

export function getRelatedProducts(slug: string, category: string): Product[] {
  return products.filter((p) => p.category === category && p.slug !== slug).slice(0, 4);
}
