import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.api";
import ProductCard from "../components/product/ProductCard";

const ProductsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Explore Our Products
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover a wide range of high-quality products curated for you.
          Shop confidently with trusted sellers and fast delivery.
        </p>

        {data && (
          <p className="text-sm text-gray-400 mt-3">
            {data.length} products available
          </p>
        )}
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-80 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsPage;