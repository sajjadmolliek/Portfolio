import HeadingStyle from "../../Components/HeadingStyle/HeadingStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from '@mui/icons-material/BugReport';
import LaptopIcon from '@mui/icons-material/Laptop';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Services = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
      <HeadingStyle heading={"Services I Can Provide"}></HeadingStyle>
      </div>
      <div className="mb-20">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper  w-[20rem] h-[10rem] text-white text-center"
        >
          <SwiperSlide className="bg-red-600  rounded-3xl">
            <div className="flex gap-5 justify-center flex-col items-center h-[10rem]">
              <LaptopIcon sx={{fontSize:"40px"}}/>
              <p className="text-2xl">Responsive Website</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-blue-600  rounded-3xl">
            <div className="flex gap-5 justify-center flex-col items-center h-[10rem]">
              <EmojiEmotionsIcon  sx={{fontSize:"40px"}}/>
              <p className="text-2xl">Satisfactory User Experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-green-600  rounded-3xl">
            <div className="flex gap-5 justify-center flex-col items-center h-[10rem]">
              <CodeIcon  sx={{fontSize:"40px"}}/>
              <p className="text-2xl">Clean Code</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-yellow-600  rounded-3xl">
            <div className="flex gap-5 justify-center flex-col items-center h-[10rem]">
              <BugReportIcon  sx={{fontSize:"40px"}}/>
              <p className="text-2xl">Fixed Bug</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
