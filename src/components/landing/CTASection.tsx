import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Discover Products You'll Love
        </h2>

        <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our curated collection of high-quality products designed
          to elevate your everyday experience.
        </p>

        <div className="mt-10 flex justify-center">
          <Link to="/products">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Products
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTASection;