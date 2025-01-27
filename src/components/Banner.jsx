import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <>
      <div className="bg-purple-500 text-white  flex justify-center items-center p-16 rounded-xl">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white text-purple-500 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative -top-12 z-10 ">
        <div className="w-3/5 mx-auto max-w-150  border  p-2 rounded-2xl">
          <img className="rounded-2xl" src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
