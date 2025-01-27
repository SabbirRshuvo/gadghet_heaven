import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistic from "../pages/Statistic";
import ProductsCard from "../components/ProductsCard";
import ProductList from "../components/ProductList";
import ProductsDetails from "../pages/ProductsDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Error from "../components/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductList />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/",
            element: <ProductsCard />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductsCard />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Cart />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductsDetails />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
    ],
  },
]);

export default routes;
