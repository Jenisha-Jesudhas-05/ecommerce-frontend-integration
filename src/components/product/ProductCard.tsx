import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="group overflow-hidden rounded-xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold line-clamp-1">
            {product.name}
          </h2>

          <p className="text-gray-500 text-sm line-clamp-2">
            {product.description}
          </p>

          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-green-600">
              ₹{product.price}
            </span>

            <Link
              to={`/products/${product.id}`}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default ProductCard;