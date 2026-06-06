import CTASection from "@/components/CTASection/CTASection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import JobPortalHero from "@/components/Statuse/state";



export default function Home() {
  return (
    <>
      <JobPortalHero />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
