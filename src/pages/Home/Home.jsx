import FeatureCategory from "../../components/Home/FeatureCategory/FeatureCategory";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import HighlightProducts from "../../components/Home/Products/HeiglitedProducts/HighlightProducts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureCategory />
      <HighlightProducts />
    </div>
  );
};

export default Home;
