import CTASection from "@/components/CTASection/CTASection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import HeroSection from "@/components/HeroBanner/HeroBanner";
import PricingSection from "@/components/PricingSection/PricingSection";
import JobPortalHero from "@/components/Statuse/state";



export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <JobPortalHero />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
