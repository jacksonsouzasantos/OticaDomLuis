/**
 * Testimonials Component
 * Design: Minimalismo Sofisticado
 * - Cards de depoimentos com avatar
 * - Fundo elegante
 * - Tipografia clara
 */

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Raul Brito",
    text: "Fiquei encantado com o atendimento e os preços. Cabe no bolso e o estacionamento facilita muito!",
    rating: 5,
  },
  {
    name: "Misael Gustavo",
    text: "Excelente local, ambiente aconchegante e resolvi meu problema em poucos minutos.",
    rating: 5,
  },
  {
    name: "João Lucas",
    text: "Impressionado com a velocidade na entrega e a qualidade espetacular.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-white py-20 md:py-32 border-b border-border"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes <span className="text-accent">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Satisfação garantida em cada atendimento.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-muted border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground font-medium mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
