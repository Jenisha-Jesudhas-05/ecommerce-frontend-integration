import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/product.api";
import ProductCard from "@/components/product/ProductCard";

const FeaturedProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-3">
            Discover our most popular items curated just for you
          </p>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-80 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data?.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;