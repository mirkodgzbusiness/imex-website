const WA_NUMBER = "51994938229";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink("Hola, quisiera más información sobre sus productos.");

export function waProduct(productName: string): string {
  return waLink(
    `Hola, me interesa cotizar el producto ${productName}. ¿Me pueden dar más información?`
  );
}
