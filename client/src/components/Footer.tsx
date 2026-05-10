/**
 * Footer Component
 * Design: Minimalismo Sofisticado
 * - Informações de contato
 * - Horários de funcionamento
 * - Links de redes sociais
 * - SEO local
 */

import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">
              Ótica <span className="text-accent">Dom Luís</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sua ótica de confiança em João Pessoa, oferecendo armações
              exclusivas, lentes de alta tecnologia e atendimento humanizado.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-bold text-lg mb-4">Informações</h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">
                      Rua Josefa Taveira, nº 1511
                    </p>
                    <p className="text-sm text-gray-300">
                      Mangabeira, João Pessoa - PB
                    </p>
                    <p className="text-sm text-gray-300">58055-000</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <a
                    href="tel:+5583982050815"
                    className="text-sm text-gray-300 hover:text-accent transition-colors"
                  >
                    (83) 98205-0815
                  </a>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">Abre às 08:30</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Seg-Sex: 08:30 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <a
                href="https://instagram.com/oticadomluisjp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@oticadomluisjp</span>
              </a>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">WhatsApp</h4>
              <a
                href="https://wa.me/5583982050815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Ótica Dom Luís. Todos os direitos
              reservados.
            </p>
            <p>
              Localizada em Mangabeira, João Pessoa - Especialista em óculos de
              grau, sol e lentes de contato.
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org Markup for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ótica Dom Luís",
            image:
              "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/hero-glasses-femk7Xx6F2NzNPxqqnqdqs.webp",
            description:
              "Ótica em João Pessoa especializada em armações exclusivas, lentes de alta tecnologia e exames de vista.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Josefa Taveira, nº 1511",
              addressLocality: "João Pessoa",
              addressRegion: "PB",
              postalCode: "58055-000",
              addressCountry: "BR",
            },
            telephone: "+5583982050815",
            url: "https://oticadomluisjp.manus.space",
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-7.1315",
              longitude: "-34.8449",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:30",
              closes: "18:00",
            },
            sameAs: ["https://instagram.com/oticadomluisjp"],
          }),
        }}
      />
    </footer>
  );
}
