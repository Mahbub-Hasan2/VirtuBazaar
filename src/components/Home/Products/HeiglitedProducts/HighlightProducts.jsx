import { FaArrowRight } from "react-icons/fa";
import highlightImg1 from "../../../../assets/images/Banner/banner-1.png";
import highlightImg2 from "../../../../assets/images/Banner/banner-2.png";
import highlightImg3 from "../../../../assets/images/Banner/banner-3.png";
const HighlightProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      <div className="relative rounded-lg group">
        <img src={highlightImg1} alt="" className="rounded-lg w-full " />
        <div className="absolute top-0 left-0 w-full h-full  rounded-lg transition-all justify-center duration-300 flex flex-col p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 transition-all duration-300 transform group-hover:-translate-y-2">
            Make your Breakfa st Healthy and Easy
          </h1>
          <div className="mt-8">
            <button className="text-white bg-emerald-500 py-1 sm:py-2 px-2  sm:px-4 rounded-md  flex items-center gap-2 hover:gap-4 hover:bg-orange-400  transition-all duration-300 ">
              <span className="">Shop Now</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg group">
        <img src={highlightImg2} alt="" className="rounded-lg w-full " />
        <div className="absolute top-0 left-0 w-full h-full  rounded-lg transition-all justify-center duration-300 flex flex-col p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 transition-all duration-300 transform group-hover:-translate-y-2">
            Make your Breakfa st Healthy and Easy
          </h1>
          <div className="mt-8">
            <button className="text-white bg-emerald-500 py-1 sm:py-2 px-2  sm:px-4 rounded-md  flex items-center gap-2 hover:gap-4 hover:bg-orange-400  transition-all duration-300 ">
              <span className="">Shop Now</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg group">
        <img src={highlightImg3} alt="" className="rounded-lg w-full " />
        <div className="absolute top-0 left-0 w-full h-full  rounded-lg transition-all justify-center duration-300 flex flex-col p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 transition-all duration-300 transform group-hover:-translate-y-2">
            Make your Breakfa st Healthy and Easy
          </h1>
          <div className="mt-8">
            <button className="text-white bg-emerald-500 py-1 sm:py-2 px-2  sm:px-4 rounded-md  flex items-center gap-2 hover:gap-4 hover:bg-orange-400  transition-all duration-300 ">
              <span className="">Shop Now</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightProducts;
