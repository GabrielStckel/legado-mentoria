import Hero from "@/components/legado/Hero";
import Dor from "@/components/legado/Dor";
import NovaLeitura from "@/components/legado/NovaLeitura";
import Legado from "@/components/legado/Legado";
import Grupo from "@/components/legado/Grupo";

export default function Index() {
  return (
    <>
      <Hero />
      <main>
        <Dor />
        <NovaLeitura />
        <Legado />
        <Grupo />
      </main>
    </>
  );
}
