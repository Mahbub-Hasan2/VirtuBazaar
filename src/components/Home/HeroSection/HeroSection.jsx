import SwiperCore, {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { GrSend } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../../assets/images/slider/slider-1.png";
import sliderImg2 from "../../../assets/images/slider/slider-2.png";
import { useRef } from "react";
import "swiper/css/navigation";

import SliderButton from "../SliderButton/SliderButton";

SwiperCore.use([Navigation]);

const HeroSection = () => {
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
    <div className="relative py-6 sm:py-8 sm:px-8 rounded-lg group">
      <Swiper
        ref={swiper}
        modules={[Navigation, EffectFade, Pagination, Autoplay, A11y]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="h-[80vh] relative z-10 rounded-lg">
            <img
              src={sliderImg1}
              alt="Image 1"
              className="h-full object-cover w-full rounded-lg"
            />
            <div className="px-2 sm:px-4 rounded-lg absolute w-full sm:w-9/12 mx-auto sm:mx-0 z-50 h-full  top-0 left-0 flex items-center ">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
                  Don’t miss amazing <br />
                  grocery deals
                </h1>
                <p className="md:text-2xl sm:text-3xl text-slate-500">
                  Sign up for the daily newsletter
                </p>

                <div className="bg-gray-200 rounded-full flex items-center w-full sm:w-fit">
                  <label
                    htmlFor="subscribe"
                    className="ps-2 sm:ps-4 pe-1 sm:pe-2"
                  >
                    <GrSend />
                  </label>
                  <input
                    placeholder="Your Email Address"
                    type="text"
                    id="subscribe"
                    className="bg-gray-200 md:w-60 placeholder:text-slate-700  sm:flex-1 py-4 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="text-white bg-emerald-500 py-3 sm:py-4 px-4   sm:px-6 rounded-full"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[80vh] relative z-10 rounded-lg">
            <img
              src={sliderImg2}
              alt="Image 2"
              className="h-full object-cover w-full rounded-lg"
            />
            <div className="px-2 sm:px-4 rounded-lg absolute w-full sm:w-9/12 mx-auto sm:mx-0 z-50 h-full  top-0 left-0 flex items-center ">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
                Fresh Vegetable Bi <br />g Discount
                </h1>
                <p className="md:text-2xl sm:text-3xl text-slate-500">
                  Sign up for the daily newsletter
                </p>

                <div className="bg-gray-200 rounded-full flex items-center w-full sm:w-fit">
                  <label
                    htmlFor="subscribe"
                    className="ps-2 sm:ps-4 pe-1 sm:pe-2"
                  >
                    <GrSend />
                  </label>
                  <input
                    placeholder="Your Email Address"
                    type="text"
                    id="subscribe"
                    className="bg-gray-200 md:w-60 placeholder:text-slate-700  sm:flex-1 py-4 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="text-white bg-emerald-500 py-3 sm:py-4 px-4   sm:px-6 rounded-full"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>

      <SliderButton label="prev" onClick={handlePrevSlideClick} />
      <SliderButton label="next" onClick={handleNextSlideClick} />
    </div>
  );
};

export default HeroSection;
