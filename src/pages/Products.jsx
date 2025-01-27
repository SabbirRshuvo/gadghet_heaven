import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Products = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setProducts(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setProducts(sorted);
    }
  };

  return (
    <div className="grid grid-cols-3">
      <div>
        <button
          onClick={() => handleSort("popularity")}
          className="btn btn-warning"
        >
          Sort By Popularity
        </button>
        <button
          onClick={() => handleSort("rating")}
          className="btn btn-warning"
        >
          Sort By Rating
        </button>
      </div>
      <div>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
