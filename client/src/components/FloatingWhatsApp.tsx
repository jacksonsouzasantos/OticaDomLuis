/**
 * Floating WhatsApp Component
 * Design: Botão flutuante com pulse suave
 * - Aparece após 5 segundos
 * - Animação de pulse
 * - Posicionado no canto inferior direito
 */

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = "https://wa.me/5583982050815";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Pulse Background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity as any }}
        style={{ opacity: 0.3 }}
      />

      {/* Icon */}
      <MessageCircle className="w-6 h-6 relative z-10" />
    </motion.a>
  );
}
