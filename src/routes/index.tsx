import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mentoria Legado em Grupo" },
      { name: "description", content: "A desordem que tu repetes — nos relacionamentos, no trabalho, no dinheiro — não nasceu em ti. Ela começou muitas gerações atrás. E tem solução." },
      { property: "og:title", content: "Mentoria Legado em Grupo" },
      { property: "og:description", content: "Tu estás vivendo a vida de outra pessoa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
