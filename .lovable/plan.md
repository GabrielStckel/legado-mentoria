# Etapa 10 — FAQ, CTA final, rodapé e barra fixa no mobile

Criar os arquivos exatamente com o código enviado, sem texto novo.

1. `src/components/legado/Faq.tsx` — acordeão sem título, um item aberto por vez, botão "+" com canto cortado.
2. `src/components/legado/CtaFinal.tsx` — faixa escura com esfera, frase final, "Este é o Legado." e botão de checkout; rodapé só com o logo branco.
3. `src/components/legado/StickyCta.tsx` — barra fixa só no celular; aparece depois do botão do topo e some na oferta e no CTA final.
4. `src/pages/Index.tsx` — substituir pelo conteúdo enviado (Faq dentro do main; CtaFinal e StickyCta depois).

## Conferência
- Se faltar algo para compilar (ex.: classe `.faq-content`, `text-gradient-sky`, `float-soft`, id `hero-cta` no Hero, pacote do acordeão), faço só a correção mínima e aviso.
- Comparar com as referências em 1366px e 390px; testar no celular que a barra aparece após o topo e some na oferta; FAQ abre/fecha com um só aberto; sem rolagem horizontal.
