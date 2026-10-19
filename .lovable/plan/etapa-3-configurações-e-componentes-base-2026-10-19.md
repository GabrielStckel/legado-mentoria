# Etapa 3 — Configurações e componentes-base

Criar os 3 arquivos enviados, copiados direto do documento, sem nenhuma alteração:

1. `src/config/legado.ts` — configurações editáveis (link do checkout, parcelamento, foto, depoimentos).
2. `src/lib/checkout.ts` — link do checkout com UTMs, Pixel e teste de headline.
3. `src/components/legado/primitives.tsx` — componentes-base (Reveal, Diamond, SectionHeading, Emph, Highlight, CtaButton, NightBackdrop).

`src/lib/utils.ts` já exporta `cn`, e as bibliotecas necessárias já estão instaladas — nada a criar ou instalar.

## Observação técnica
Os componentes só acessam o navegador dentro de efeitos, então funcionam com a renderização no servidor. A única ressalva: `headlineIndex()` lê a URL e só pode ser chamada depois que a página carrega no navegador. Vou lembrar disso na etapa que a usar.

## Pronto quando
- O projeto compila sem erros.
- A página continua em branco.
