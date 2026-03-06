import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          JenKart
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-96">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-700 hover:text-black font-medium"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 hover:text-black font-medium"
          >
            Products
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={22} />
          </Link>

          {/* Login */}
          <Button size="sm">Login</Button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;