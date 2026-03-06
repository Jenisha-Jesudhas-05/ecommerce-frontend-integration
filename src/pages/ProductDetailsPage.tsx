import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/product.api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });

  if (isLoading)
    return <div className="text-center py-20">Loading product...</div>;

  if (!data)
    return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          
          <div className="grid md:grid-cols-2 gap-8 p-6">
            
            {/* Product Image */}
            <div className="flex justify-center items-center bg-gray-50 rounded-lg p-6">
              <img
                src={data.image || "https://via.placeholder.com/600"}
                alt={data.name}
                className="max-h-100 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-5">

              <h1 className="text-3xl font-bold">
                {data.name}
              </h1>

              <p className="text-gray-600">
                {data.description}
              </p>

              {/* Price */}
              <div className="text-3xl font-bold text-green-600">
                ₹{data.price}
              </div>

              {/* Stock */}
              <p className="text-sm text-gray-500">
                Stock Available: {data.stock}
              </p>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button size="lg">
                  Add to Cart
                </Button>

                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
              </div>

            </div>

          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;