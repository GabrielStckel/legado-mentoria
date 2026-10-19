import { CHECKOUT_URL, PASS_THROUGH_PARAMS } from "@/config/legado";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Monta o link do checkout repassando UTMs / src / sck da URL atual. */
export function buildCheckoutUrl(): string {
  if (!CHECKOUT_URL) return "#oferta";
  try {
    const url = new URL(CHECKOUT_URL);
    const current = new URLSearchParams(window.location.search);
    current.forEach((value, key) => {
      if (PASS_THROUGH_PARAMS.test(key) && !url.searchParams.has(key))
        url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    return CHECKOUT_URL;
  }
}

/** Evento do Meta Pixel ao clicar em um botão que leva ao checkout. */
export function trackCheckoutClick(position: string) {
  if (CHECKOUT_URL && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout", { content_name: "Mentoria Legado em Grupo", position });
  }
}

/** Variação de headline para teste A/B: ?h=1 | ?h=2 | ?h=3 (funciona no SSR, sem piscar) */
export function headlineIndexFrom(value: unknown, total: number): number {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= total ? n - 1 : 0;
}
