/**
 * Health & Style Component
 * Design: Destaque de benefícios com ícones minimalistas
 * - Exame de R$ 29,99 como investimento
 * - Diferenciais com ícones clean
 * - Layout assimétrico
 */

import { motion } from "framer-motion";
import { Heart, ParkingCircle, Zap, Clock } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Saúde Visual",
    description: "Exame completo por apenas R$ 29,99",
  },
  {
    icon: ParkingCircle,
    title: "Estacionamento",
    description: "Próprio e de fácil acesso",
  },
  {
    icon: Zap,
    title: "Entrega Veloz",
    description: "Qualidade nota 10/10",
  },
  {
    icon: Clock,
    title: "Atendimento",
    description: "Humanizado e rápido",
  },
];

export default function HealthStyle() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="health"
      className="py-20 md:py-32 bg-white border-t border-border/40"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Saúde & Estilo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que óculos. Um investimento na sua visão e bem-estar.
          </p>
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 p-8 md:p-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/20 backdrop-blur-sm"
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium mb-2">
              OFERTA ESPECIAL
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Exame de Vista Completo
            </h3>
            <p className="text-2xl md:text-3xl text-accent font-bold mb-4">
              R$ 29,99
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Diagnóstico preciso com tecnologia de ponta. Porque sua visão
              merece atenção especializada.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-muted/50 border border-border/40 backdrop-blur-sm hover:bg-muted transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
