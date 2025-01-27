import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { product_title, product_image, price, id } = product;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <figure className="w-full  bg-gray-300 rounded-lg mb-4">
        <img
          className="h-40 w-full object-cover rounded-xl"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}K</p>
        <div className="card-actions justify-start">
          <Link
            to={`/product/${id}`}
            className="mt-4 px-4 py-2 bg-purple-100 text-purple-600 font-semibold rounded-lg hover:bg-purple-200 cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
