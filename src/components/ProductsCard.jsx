import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import NoData from "./NoData";

const ProductsCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterByCategory = [...data].filter(
      (product) => product.category === category
    );
    setProducts(filterByCategory);
  }, [category, data]);
  return (
    <>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
};

export default ProductsCard;
