import Loading from "components/Loading";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductsContext } from "context/products_context";
import { useFilterContext } from "context/filter_context";

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();
  const { productsLoading } = useProductsContext();

  if (productsLoading) {
    return <Loading />;
  }

  if (filteredProducts.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no product matches your search...
      </h5>
    );
  }

  if (!gridView) {
    return <ListView filteredProducts={filteredProducts} />;
  }
  return <GridView filteredProducts={filteredProducts} />;
};

export default ProductList;
