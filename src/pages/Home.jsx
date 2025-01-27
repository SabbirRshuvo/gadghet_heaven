import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner />
      {/* heading */}
      <Heading title={"Explore Cutting-Edge Gadgets"} />
      <div className="my-6 min-h-screen bg-gray-100 p-4 flex gap-4">
        <Categories categories={categories} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
