import { data } from "../constants/constant";
import ProductTabs from "../features/products/ProductTabs";
import ProductsMainContent from "../features/products/ProductsMainContent";
// import PageHeader from "../ui/PageHeader";

const ProductsPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-10 py-6">
        <ProductTabs />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
          {data.map((product) => (
            <ProductsMainContent product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
