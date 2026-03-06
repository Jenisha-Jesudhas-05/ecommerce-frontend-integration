import { Card, CardContent } from "@/components/ui/card";
import { Truck, ShieldCheck, BadgeCheck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your products delivered quickly with our reliable shipping partners.",
      icon: Truck,
    },
    {
      title: "Secure Payment",
      desc: "All transactions are encrypted and protected for safe payments.",
      icon: ShieldCheck,
    },
    {
      title: "Trusted Sellers",
      desc: "We work only with verified sellers to ensure product quality.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-3">
            We provide the best shopping experience for our customers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center space-y-4">

                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="bg-black text-white p-4 rounded-full">
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {feature.desc}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;