import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { addToCart, getAllProducts } from "../utilites";
import { addWishList, getAllWishList } from "../utilites/wishlist";
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const ProductsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isWishList, setIsWishList] = useState(false);
  useEffect(() => {
    const singleData = data.find((product) => product.id == id);
    setProduct(singleData);
    const favorites = getAllProducts();
    const isExists = favorites.find((item) => item.id == singleData.id);
    if (isExists) {
      setIsAddToCart(true);
    }
  }, [data, id]);

  useEffect(() => {
    const singleData = data.find((product) => product.id == id);
    setProduct(singleData);
    const favorites = getAllWishList();
    const isExists = favorites.find((item) => item.id !== singleData.id);
    if (isExists) {
      setIsWishList(true);
    }
  }, [data, id]);

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
  } = product;

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsAddToCart(true);
  };

  const handleWishList = (product) => {
    addWishList(product);
    setIsWishList(true);
  };

  const navigate = useNavigate();

  const handleAddToCartButton = () => {
    navigate("/dashboard/cart");
  };
  const handleAddToWishlistButton = () => {
    navigate("/dashboard/wishlist");
  };

  return (
    <>
      <div className="bg-purple-600 p-12 rounded-2xl text-white max-h-screen ">
        <Heading title={"Product Details"} />
        <p className="w-3/4 mx-auto my-4">
          Explore the latest gadgets that will take your experience to that next
          level. From smart devices to the coolest accessories, we have it all
        </p>
      </div>
      <div className=" bg-white shadow-lg rounded-xl p-6 flex gap-6 relative -top-10 w-10/12 mx-auto">
        <div className="flex-shrink-0 w-1/3 bg-gray-200 rounded-lg">
          <img
            src={product_image}
            alt={product_title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {product_title}
          </h1>
          <p className="text-xl font-semibold text-gray-600 mb-4">
            Price: ${price}
          </p>

          <span className="border bg-green-400 rounded-xl py-1 text-white px-4">
            in Stock
          </span>

          <p className="text-gray-700 text-sm mt-4">{description}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Specification:
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              {specification &&
                specification.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div className="flex items-center mt-4">
            <p className="text-gray-800 font-medium mr-2">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 ml-2">{rating}</p>
          </div>

          <div className="flex items-center mt-6 gap-4">
            <Link
              disabled={isAddToCart}
              onClick={() => handleAddToCart(product)}
              onDoubleClick={handleAddToCartButton}
              className="px-6 py-2  bg-gray-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition cursor-pointer flex items-center "
            >
              Add To Cart
              <CiShoppingCart className="text-2xl ml-2" />
            </Link>
            <Link
              disabled={isWishList}
              onClick={() => handleWishList(product)}
              onDoubleClick={handleAddToWishlistButton}
              className="px-6 py-2  bg-gray-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition cursor-pointer flex items-center"
            >
              Wishlist
              <CiHeart className="text-2xl ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
