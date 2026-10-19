# Etapa 1 — Fundação da Mentoria Legado

Página em branco, sem nenhuma seção e sem nenhum texto visível. Só a base: imagens, fonte, cores, estilos e dados de compartilhamento.

## O que será feito
1. **Imagens** — salvar os 9 arquivos nos caminhos pedidos (6 em `src/assets/legado/`, e `favicon.png`, `apple-touch-icon.png`, `og-legado.jpg` em `public/`). Remover o favicon padrão do Lovable.
2. **Fonte** — instalar Montserrat (self-hosted) e remover qualquer outra fonte.
3. **Cores e estilos** — adicionar os tokens `ap-*` e colar o bloco CSS da identidade Antiparadigma exatamente como enviado.
4. **Cabeçalho da página** — idioma pt-BR, título, descrição, theme-color, ícones e og/twitter com os textos exatos da etapa.
5. **Página "/"** — criar `src/pages/Index.tsx` com o conteúdo enviado e fazer a rota "/" renderizá-lo.

## Adaptações necessárias (o projeto não é Vite puro)
Este projeto usa TanStack Start, então alguns arquivos citados na etapa não existem. Equivalências:
- `src/index.css` → `src/styles.css` (Tailwind v4: tokens em `@theme` logo após o import; bloco CSS colado no final, sem alterações).
- `src/main.tsx` → o import `@fontsource-variable/montserrat` vai no topo de `src/styles.css` (forma suportada aqui).
- `index.html` → as metatags vão no `head()` de `src/routes/__root.tsx`, e `lang="pt-BR"` na tag `<html>` de lá.
- `src/routes/index.tsx` passa a apenas renderizar `src/pages/Index.tsx`.
- O `og:image` relativo (`/og-legado.jpg`) fica como pedido; para prévias em redes sociais funcionarem de verdade, depois será preciso a URL absoluta do site publicado.

## Pronto quando
- Página em branco, sem erros, sem texto.
- Fonte do documento = Montserrat.
- Os 9 arquivos nos caminhos indicados.
