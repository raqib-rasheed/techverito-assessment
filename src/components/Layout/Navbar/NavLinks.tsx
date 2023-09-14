import { Link } from "react-router-dom";
import { links } from "../../../utils/constants";
import { useProductsContext } from "../../../context/products_context";

export const NavLinks: React.FC<{ className: string; isSidebar?: boolean }> = ({
  className,
  isSidebar,
}) => {
  const { closeSidebar } = useProductsContext();
  return (
    <ul className={className}>
      {links.map(({ id, text, url }) => {
        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li key={id} onClick={isSidebar ? closeSidebar : undefined}>
            <Link to={url}>{text}</Link>
          </li>
        );
      })}
      {isSidebar && (
        <li>
          <Link to="/checkout" onClick={closeSidebar}>
            checkout
          </Link>
        </li>
      )}
    </ul>
  );
};
