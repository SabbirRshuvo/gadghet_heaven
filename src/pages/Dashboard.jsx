import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="bg-purple-500 py-12 rounded-xl">
        <div className="text-center w-3/4 mx-auto">
          <h2 className="text-2xl text-white">Dashboard</h2>
          <p className="text-white my-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="text-center ">
          <NavLink
            to="/dashboard/cart"
            role="tab"
            className={({ isActive }) =>
              `tab capitalize text-base font-semibold space-y-2 mr-4 ${
                isActive
                  ? "tab-active text-white border rounded-xl bg-orange-400 "
                  : ""
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            role="tab"
            className={({ isActive }) =>
              `tab capitalize text-base font-semibold space-y-2 ${
                isActive
                  ? "tab-active text-white border rounded-xl bg-orange-400"
                  : ""
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
