import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";
import FeatureCard from "./FeatureCard/FeatureCard";
import FeatureTop from "./FeatureTop/FeatureTop";

//TODO this is heard coded data for feature category it will be dynamic later
const category = {
  super: [
    "Beauty & Fragrances",
    "Construction & Hardware",
    "Home & Furniture",
    "Health & Personal Care",
    "Sports & Fitness",
  ],
  main: [
    {
      name: "Strawberry",
      categoryImage: "https://source.unsplash.com/random/400x400/?strawberry",
    },
    {
      name: "Fitness & Training",
      categoryImage: "https://source.unsplash.com/random/400x400/?fitness",
    },
    {
      name: "Makeup",
      categoryImage: "https://source.unsplash.com/random/400x400/?makeup",
    },
    {
      name: "Mobile phone & Tablets",
      categoryImage: "https://source.unsplash.com/random/400x400/?technology",
    },
    {
      name: "Cake & Milk",
      categoryImage: "https://source.unsplash.com/random/400x400/?cake",
    },
    {
      name: "Coffee & Tea",
      categoryImage: "https://source.unsplash.com/random/400x400/?coffee,tea",
    },
    {
      name: "Vegetable",
      categoryImage: "https://source.unsplash.com/random/400x400/?vegetable",
    },
    {
      name: "Books",
      categoryImage: "https://source.unsplash.com/random/400x400/?books",
    },
    {
      name: "Arts & crafts",
      categoryImage: "https://source.unsplash.com/random/400x400/?arts,crafts",
    },
    {
      name: "Snack",
      categoryImage: "https://source.unsplash.com/random/400x400/?snack",
    },
    {
      name: "Data Science",
      categoryImage: "https://source.unsplash.com/random/400x400/?data,science",
    },
    {
      name: "Science",
      categoryImage: "https://source.unsplash.com/random/400x400/?Science",
    },
  ],
};
// ! this is heard coded data for feature category it will be dynamic later

SwiperCore.use([Navigation]);

export default function FeatureCategory() {
  const handleNextSlideClick = () => {
    // call swiper instance's slideNext() method
    swiper.current.swiper.slideNext();
  };
  const handlePrevSlideClick = () => {
    // call swiper instance's slidePrev() method
    // console.dir(swiper.current);
    swiper.current.swiper.slidePrev();
  };
  const swiper = useRef(null);

  return (
    <>
      <FeatureTop
        cSuper={category.super}
        handleNextSlideClick={handleNextSlideClick}
        handlePrevSlideClick={handlePrevSlideClick}
      />
      <Swiper
        ref={swiper}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="my-8 "
      >
        {category.main.map((item, index) => (
          <SwiperSlide key={index}>
            <FeatureCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
