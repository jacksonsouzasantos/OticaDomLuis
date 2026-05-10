/**
 * Social Proof Component
 * Design: Depoimentos em formato Marquee com animação suave
 * - Rolagem infinita
 * - Cards flutuantes
 * - Reação ao movimento do mouse
 */

import { motion } from "framer-motion";
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
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted to-background border-t border-border/40 overflow-hidden">
      <div className="container mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Confiança que Fala
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de clientes satisfeitos
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity as any,
            ease: "linear",
          }}
          className="flex gap-6 px-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex-shrink-0 w-80 p-6 bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-lg transition-shadow backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground font-medium mb-4 leading-relaxed italic text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
