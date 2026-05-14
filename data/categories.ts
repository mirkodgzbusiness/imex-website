export type Category = {
  slug: string;
  name: string;
  path: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "infantil",
    name: "Infantil",
    path: "/infantil",
    description: "Ganchos ideales para ropa de niños y conjuntos infantiles.",
    icon: "👶",
  },
  {
    slug: "junior",
    name: "Junior",
    path: "/junior",
    description: "Ganchos para ropa juvenil con medidas precisas.",
    icon: "🧒",
  },
  {
    slug: "adulto",
    name: "Adulto",
    path: "/adulto",
    description: "Ganchos para prendas de adulto, masculinas y femeninas.",
    icon: "👔",
  },
  {
    slug: "interior-femenina",
    name: "Interior Femenina",
    path: "/interior-femenina",
    description: "Ganchos especializados para lencería y ropa interior femenina.",
    icon: "👙",
  },
  {
    slug: "interior-masculina",
    name: "Interior Masculina",
    path: "/interior-masculina",
    description: "Ganchos para exhibición de ropa interior masculina.",
    icon: "🩲",
  },
  {
    slug: "multiusos",
    name: "Multiusos",
    path: "/multiusos",
    description: "Ganchos y accesorios versátiles para múltiples usos.",
    icon: "🔧",
  },
  {
    slug: "lavanderia",
    name: "Lavandería",
    path: "/lavanderia",
    description: "Ganchos resistentes para uso en lavanderías.",
    icon: "🧺",
  },
  {
    slug: "muebles",
    name: "Muebles",
    path: "/categoria-producto/muebles",
    description: "Muebles y estructuras para exhibición textil.",
    icon: "🪑",
  },
];
