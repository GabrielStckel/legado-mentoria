import Hero from "@/components/legado/Hero";
import Dor from "@/components/legado/Dor";
import NovaLeitura from "@/components/legado/NovaLeitura";
import Legado from "@/components/legado/Legado";
import Grupo from "@/components/legado/Grupo";
import Percurso from "@/components/legado/Percurso";
import Ritmo from "@/components/legado/Ritmo";
import Recebes from "@/components/legado/Recebes";
import Cronograma from "@/components/legado/Cronograma";
import ParaQuem from "@/components/legado/ParaQuem";

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <Dor />
        <NovaLeitura />
        <Legado />
        <Grupo />
        <Percurso />
        <Ritmo />
        <Recebes />
        <Cronograma />
        <ParaQuem />
      </main>
    </>
  );
}
