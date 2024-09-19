import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyRequest } from "../../lib/models/MyRequest.ts";
import SliderCard from "./slider-card/SliderCard.tsx";

interface SliderProps {
  requests: MyRequest[];
}
export const SimpleSlider  = ({requests}: SliderProps) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className='w-[1400px] h-[200px] mb-[325px] p-[20px]'>
      <Slider {...settings}>
        {requests.map((request, index) => {
          return(
            <SliderCard key={index} request={request}/>
          )
        })}
      </Slider>
    </div>
  );
}