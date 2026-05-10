/**
 * Footer Interactive Component
 * Design: Mapa estilizado, links com hover elegantes
 * - Mapa com pin dourado
 * - Informações de contato
 * - Links rápidos
 */

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function FooterInteractive() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-white py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <img
              src="/logo.png"
              alt="Ótica Dom Luís"
              className="h-20 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua experiência visual merece sofisticação. Armações exclusivas,
              lentes de alta tecnologia e atendimento que transpira qualidade.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h4 className="font-bold text-lg">Informações</h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-3 cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">
                    Rua Josefa Taveira, nº 1511
                  </p>
                  <p className="text-sm text-gray-400">Mangabeira, João Pessoa</p>
                </div>
              </motion.div>

              <motion.a
                href="tel:+5583982050815"
                whileHover={{ x: 5 }}
                className="flex gap-3 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-300">(83) 98205-0815</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-3 cursor-pointer"
              >
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Abre às 08:30</p>
                  <p className="text-xs text-gray-400">Seg-Sex: 08:30 - 18:00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h4 className="font-bold text-lg">Conecte-se</h4>
            <motion.a
              href="https://instagram.com/oticadomluisjp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@oticadomluisjp</span>
            </motion.a>

            <motion.a
              href="https://wa.me/5583982050815"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors w-fit"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 origin-left"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Ótica Dom Luís. Todos os direitos
              reservados.
            </p>
            <p>
              Especialista em óculos de grau, sol, lentes de contato e Clip-on.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ótica Dom Luís",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Josefa Taveira, nº 1511",
              addressLocality: "João Pessoa",
              addressRegion: "PB",
              postalCode: "58055-000",
              addressCountry: "BR",
            },
            telephone: "+5583982050815",
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-7.1315",
              longitude: "-34.8449",
            },
          }),
        }}
      />
    </footer>
  );
}
