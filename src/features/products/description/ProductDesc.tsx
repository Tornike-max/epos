import { Divider } from "@nextui-org/react";

import { useParams } from "react-router-dom";
import ProductDescMain from "./ProductDescMain";
import AnimatedButton from "../../../ui/AnimatedButton";
import { data } from "../../../constants/constant";

const ProductDesc = () => {
  const { id } = useParams();
  const productData = data.find((product) => product.id === Number(id));

  return (
    <div className="w-full flex justify-center items-start gap-4 sm:gap-6 flex-col">
      <AnimatedButton size="xl" path="/">
        Epos Software
      </AnimatedButton>
      <Divider />
      <div className="w-full flex flex-col items-start justify-center gap-4 px-2">
        <h1 className="font-bold text-lg sm:text-2xl">Products</h1>
        {productData && <ProductDescMain productData={productData} />}
      </div>
    </div>
  );
};

export default ProductDesc;
