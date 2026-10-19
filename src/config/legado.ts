// Configurações editáveis da página (NÃO é copy — é infraestrutura).

/** Link do checkout (Hotmart). Enquanto vazio, os botões levam para a seção #oferta. */
export const CHECKOUT_URL = "";

/** Condições de pagamento exibidas depois de "À vista ou parcelado — ". Vazio = não exibe nada. */
export const PAYMENT_TERMS = "";

/** Para onde vai o botão do topo: "oferta" (rola até o preço) ou "checkout" (vai direto). */
export const HERO_CTA_TARGET: "oferta" | "checkout" = "oferta";

/** Foto do Jonas (importe de src/assets e coloque aqui). Vazio = painel de marca no lugar. */
export const MENTOR_PHOTO = "";

/** Depoimentos reais de mentorados. Lista vazia = bloco de depoimentos não aparece. */
export const TESTIMONIALS: { name: string; text: string; photo?: string }[] = [];

/** Parâmetros da URL repassados ao checkout (UTMs, src/sck da Hotmart, ids de clique). */
export const PASS_THROUGH_PARAMS = /^(utm_[a-z_]+|src|sck|xcod|fbclid|gclid)$/i;
