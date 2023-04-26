import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeatureTop = ({ cSuper, handlePrevSlideClick, handleNextSlideClick }) => {
  return (
    <div className="px-8 flex items-center sm:items-end justify-between mb-4 gap-8 flex-col sm:flex-row">
      <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
      <div className=" flex items-center flex-wrap gap-x-4 gap-1-2">
        {cSuper.map((item) => (
          <p
            key={item}
            className=" transition-all duration-300 transform text-slate-800 hover:text-emerald-600 -translate-y-0 hover:-translate-y-1"
          >
            <span className="text-sm font-medium">{item}</span>
          </p>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className=" text-slate-500 hover:text-slate-800 transition-all duration-300 w-12 h-12 rounded-full bg-slate-200 hover:bg-emerald-200 bg-transparent  flex items-center justify-center  hover:shadow-lg hover:shadow-emerald-200"
          onClick={handlePrevSlideClick}
        >
          <FaArrowLeft />
        </button>
        <button
          type="button"
          className="text-slate-500 hover:text-slate-800 transition-all duration-300 w-12 h-12 rounded-full bg-slate-200 hover:bg-emerald-200 bg-transparent  flex items-center justify-center  hover:shadow-lg hover:shadow-emerald-200"
          onClick={handleNextSlideClick}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeatureTop;
