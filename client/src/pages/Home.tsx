/**
 * Home Page - Ótica Dom Luís Premium
 * Design: Apple-like com Framer Motion
 * Seções:
 * 1. Header Premium (glassmorphism)
 * 2. Hero Immersive (full-bleed, animações)
 * 3. Collection Slider (carrossel fluido)
 * 4. Health & Style (diferenciais)
 * 5. Social Proof (marquee de depoimentos)
 * 6. Footer Interactive (contato, redes)
 * 7. Floating WhatsApp (botão flutuante)
 */

import HeaderPremium from "@/components/HeaderPremium";
import HeroImmersive from "@/components/HeroImmersive";
import CollectionSlider from "@/components/CollectionSlider";
import HealthStyle from "@/components/HealthStyle";
import SocialProof from "@/components/SocialProof";
import FooterInteractive from "@/components/FooterInteractive";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <HeaderPremium />
      <main>
        <HeroImmersive />
        <CollectionSlider />
        <HealthStyle />
        <SocialProof />
      </main>
      <FooterInteractive />
      <FloatingWhatsApp />
    </div>
  );
}
