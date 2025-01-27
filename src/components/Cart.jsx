import { useEffect, useState } from "react";
import { getAllProducts, removeProducts } from "../utilites";
import { RiDeleteBack2Fill } from "react-icons/ri";

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const addToCart = getAllProducts();
    setProducts(addToCart);
  }, []);

  const handleRemove = (id) => {
    removeProducts(id);
    const updateProducts = getAllProducts();
    setProducts(updateProducts);
  };

  const handleSortByPrice = () => {
    const sortedByProduct = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedByProduct);
  };

  return (
    <>
      <div>
        <div className="flex justify-between container mx-auto my-6">
          <div>
            <h2 className="text-2xl">Cart</h2>
          </div>
          <div className="">
            <button
              onClick={handleSortByPrice}
              className="border border-purple-100 px-6 hover:bg-emerald-400 cursor-pointer rounded-xl transition mr-4 btn"
            >
              Sort by Price
            </button>
            <button className="border border-purple-100 px-6 hover:bg-emerald-400 cursor-pointer rounded-xl transition mr-4 btn">
              Purchase
            </button>
          </div>
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

export default Cart;
