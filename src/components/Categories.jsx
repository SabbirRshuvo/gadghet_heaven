/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col justify-self-start  my-4 rounded-xl w-1/5 bg-white p-4  shadow-md ">
      {/* All Products Button */}
      <NavLink
        to="/"
        role="tab"
        className={({ isActive }) =>
          `tab capitalize text-base font-semibold space-y-2 ${
            isActive
              ? "tab-active text-warning border border-purple-400 rounded-xl bg-purple-500"
              : ""
          }`
        }
      >
        All Products
      </NavLink>

      {/* Specific Categories */}
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab capitalize text-base font-semibold ${
              isActive
                ? "tab-active text-warning border border-purple-400 rounded-xl bg-purple-500"
                : ""
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
