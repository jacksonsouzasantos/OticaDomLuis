/**
 * Diferenciais Component
 * Design: Minimalismo Sofisticado
 * - Grid de 4 diferenciais
 * - Ícones minimalistas
 * - Tipografia clara e hierárquica
 * - Espaçamento generoso
 */

import {
  Heart,
  ParkingCircle,
  Sofa,
  Zap,
} from "lucide-react";

const diferenciais = [
  {
    icon: Heart,
    title: "Atendimento Humanizado e Rápido",
    description:
      "Equipe dedicada a oferecer a melhor experiência de compra para você.",
  },
  {
    icon: ParkingCircle,
    title: "Estacionamento Próprio e Fácil",
    description: "Facilidade de acesso e comodidade para todos os clientes.",
  },
  {
    icon: Sofa,
    title: "Ambiente Aconchegante",
    description:
      "Espaço confortável e acolhedor para você relaxar durante o atendimento.",
  },
  {
    icon: Zap,
    title: "Entrega Veloz - Qualidade Nota 10/10",
    description: "Armações prontas com rapidez e excelência garantida.",
  },
];

export default function Diferenciais() {
  return (
    <section className="bg-white py-20 md:py-32 border-b border-border">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-accent">Dom Luís</span>?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 rounded-lg bg-muted border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
