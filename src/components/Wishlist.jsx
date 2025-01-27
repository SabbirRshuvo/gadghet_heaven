import { useEffect, useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { getAllWishList, removeWishList } from "../utilites/wishlist";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const addToWishList = getAllWishList();
    setProducts(addToWishList);
  }, []);

  const handleRemove = (id) => {
    removeWishList(id);
    const products = getAllWishList();
    setProducts(products);
  };

  return (
    <>
      <div>
        <div className="my-4">
          <h2 className="text-2xl">Wishlist</h2>
        </div>
        {products.map((product) => (
          <div
            className="flex p-2 border justify-between my-2 rounded-xl"
            key={product.id}
          >
            <div className="flex">
              <img
                className="h-20 w-20 object-center rounded-xl items-center justify-center"
                src={product.product_image}
                alt=""
              />
              <div className="ml-5">
                <h2 className="text-xl font-bold">{product.product_title}</h2>
                <p className="text-base">{product.description}</p>
                <p className="text-lg font-semibold">{product.price}</p>
              </div>
            </div>
            <div
              onClick={() => handleRemove(product.id)}
              className="text-2xl cursor-pointer"
            >
              <RiDeleteBack2Fill />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
