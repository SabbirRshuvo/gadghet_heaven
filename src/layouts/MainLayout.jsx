import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* navbar */}
      <div className="w-11/12 mx-auto h-16 ">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-350px)] py-12 w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
