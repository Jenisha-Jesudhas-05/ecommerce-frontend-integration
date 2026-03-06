import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Discover Premium <span className="text-gray-900">Products</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Shop high-quality products curated just for you. 
          Experience seamless shopping, secure payments, and fast delivery.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/products">
            <Button size="lg" className="px-8 py-6 text-lg">
              Shop Now
            </Button>
          </Link>

          <Link to="/products">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              Browse Products
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;