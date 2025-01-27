import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const ProductList = () => {
  const data = useLoaderData();
  return (
    <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
