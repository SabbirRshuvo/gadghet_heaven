import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/dashboard/cart");
  };
  const handleWishList = () => {
    navigate("/dashboard/wishlist");
  };
  return (
    <div className="navbar   shadow-sm  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistic">Statistic</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Gadghet_Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistic">Statistic</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </ul>
      </div>
      <div className="navbar-end ">
        <CiShoppingCart
          onClick={handleCart}
          className="mr-4 border rounded-full  text-3xl hover:bg-green-400 transition cursor-pointer"
        />
        <CiHeart
          onClick={handleWishList}
          className="mr-4 border rounded-full  text-3xl hover:bg-green-400 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
