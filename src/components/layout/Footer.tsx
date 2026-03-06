import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">JenKart</h2>
            <p className="text-gray-600 mt-3 text-sm">
              Your trusted ecommerce platform to discover
              high-quality products from verified sellers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/" className="hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-black">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-black">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10">
          <Separator />
        </div>

        {/* Bottom */}
        <p className="text-center mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} JenKart. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;