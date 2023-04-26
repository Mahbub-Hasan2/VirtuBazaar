
const FeatureCard = ({ item }) => {
  return (
    <div>
      <div className="group flex flex-col items-center justify-center w-full h-full p-4 bg-slate-100 rounded-lg shadow-lg ring-1 ring-transparent hover:ring-gray-500  ring-inset transition-all duration-300 transform">
        <div className="w-32 h-32 rounded-lg mb-4 overflow-hidden">
          <img
            className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-110"
            src={item.categoryImage}
            alt=""
          />
        </div>

        <h3 className="transition-all duration-300 transform text-lg font-medium text-gray-900 group-hover:text-emerald-600">
          {item.name}
        </h3>
      </div>
    </div>
  );
};

export default FeatureCard;
