import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturedSection";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
      <CTASection />
    </>
  );
};

export default LandingPage;