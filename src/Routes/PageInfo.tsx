import { Cart, Error, Home } from "pages";
import SingleProduct from "pages/SingleProductPage/SingleProductPage";
import ProductsPage from "pages/ProductsPage";
import { ReactElement } from "react";

export type AppPageName =
  | "HOME"
  | "PRODUCTS"
  | "PRODUCT_DETAIL"
  | "CART"
  | "ERROR";

interface PageDeet {
  path: string;
  routePath: string;
  title: string;
  element: ReactElement;
  name: AppPageName;
}

export const AppPages: PageDeet[] = [
  {
    name: "HOME",
    path: "/",
    routePath: "",
    title: "Home",
    element: <Home />,
  },
  {
    name: "PRODUCTS",
    path: "/products",
    routePath: "products",
    title: "Products",
    element: <ProductsPage />,
  },
  {
    name: "PRODUCT_DETAIL",
    path: "/products/:slug",
    routePath: ":slug",
    title: "products - Techverito",
    element: <SingleProduct />,
  },
  {
    name: "CART",
    path: "/cart",
    routePath: "cart",
    title: "Cart",
    element: <Cart />,
  },
  {
    name: "ERROR",
    path: "*",
    routePath: "",
    title: "Error",
    element: <Error />,
  },
];
