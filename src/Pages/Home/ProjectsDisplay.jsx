import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import forum from "/src/assets/Projects_Image/forum.png"
import assignment from "/src/assets/Projects_Image/assignment.png"
import shoes from "/src/assets/Projects_Image/shoes.png"

const ProjectsDisplay = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="p-4" >
          <h1 className="text-white text-center text-3xl md:text-4xl mb-6">Project Name Forum</h1>
          <h1 className="text-white text-center text-xs md:text-sm lg:text-base">This is Use to post any thing depend on the category and give like and comments to each others</h1>
          <img src={forum} alt="Forum" className="mt-10 w-[72rem] mx-auto " />
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <h1 className="text-white text-center text-3xl md:text-4xl mb-6">Project Name Assignment Management</h1>
          <h1 className="text-white text-center text-xs md:text-sm lg:text-base">This is Use to post any thing depend on the category and give like and comments to each others</h1>
          <img src={assignment} alt="Forum" className="mt-10 w-[72rem] mx-auto" />
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <h1 className="text-white text-center text-3xl md:text-4xl mb-6">Project Name Shoes Store</h1>
          <h1 className="text-white text-center text-xs md:text-sm lg:text-base">This is Use to post any thing depend on the category and give like and comments to each others</h1>
          <img src={shoes} alt="Forum" className="mt-10 w-[72rem] mx-auto" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default ProjectsDisplay;
