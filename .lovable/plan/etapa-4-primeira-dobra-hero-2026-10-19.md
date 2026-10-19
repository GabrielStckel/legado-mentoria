# Etapa 4 — Primeira dobra (hero)

Criar a primeira dobra igual à referência `01-hero.jpg` (desktop e mobile em 390px), usando o código enviado.

## O que será feito
1. Criar `src/components/legado/Hero.tsx` com o código do documento.
2. Atualizar `src/pages/Index.tsx` para mostrar o Hero.
3. Conferir em 1366px e 390px: headline em 2 linhas no desktop, chips 2x2 no mobile, cristais sem cobrir o texto, sem rolagem horizontal, e as variações `?h=2` e `?h=3`.

## Ajuste necessário (um único ponto)
O código chama `headlineIndex()` durante a montagem da página. Neste projeto, a página também é montada no servidor, onde não existe endereço do navegador, e isso derrubaria a página.

Ajuste: a headline começa com a variação 1 e, assim que a página abre no navegador, troca para a variação pedida em `?h=` (lida em um efeito). Nenhum texto muda. Com `?h=2`/`?h=3` pode haver uma troca instantânea na primeira exibição.

## Pronto quando
- Os critérios da etapa batem com a referência nos dois tamanhos.
