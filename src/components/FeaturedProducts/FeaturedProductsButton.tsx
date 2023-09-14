import { Link } from "react-router-dom";

export const FeaturedProductsButton = () => {
  return (
    <Link to="/products" className="btn call-to-action">
      all products
    </Link>
  );
};
