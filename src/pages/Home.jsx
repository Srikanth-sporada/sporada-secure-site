import { SEOHead } from "@/components/shared/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsSection } from "@/components/home/StatsSection";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sporada Secure",
    "image": "https://www.sporadasecure.com/logo.png",
    "url": "https://www.sporadasecure.com",
    "telephone": "+91-422-231-2363",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "687/7, Trichy Road, Ramanathapuram",
      "addressLocality": "Coimbatore",
      "postalCode": "641045",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEOHead 
        title="Home" 
        schemaData={homeSchema} 
      />
      <div className="flex flex-col w-full">
        <HeroSection />
        <TrustBar />
        <HowItWorks />
        <StatsSection />
        <IndustriesGrid />
        <SolutionsShowcase />
        <Testimonials />
        <CTABanner />
      </div>
    </>
  );
}
