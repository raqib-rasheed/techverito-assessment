import TechveritoLogo from "../../../assets/techverito-logo.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useProductsContext } from "../../../context/products_context";

export const SidebarHeader = () => {
  const { closeSidebar } = useProductsContext();
  return (
    <div className="sidebar-header">
      <Link to="/" onClick={closeSidebar}>
        <img src={TechveritoLogo} className="logo" alt="cute buddy" />
      </Link>
      <button type="button" className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
  );
};
