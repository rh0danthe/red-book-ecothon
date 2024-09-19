import InteractiveMap from "../../map/InteractiveMap.tsx";
import { Typography } from "../../typography/Typography.tsx";
import { MyRequest } from "../../../lib/models/MyRequest.ts";

interface SliderCardProps {
  request: MyRequest;
}
const SliderCard = ({request} : SliderCardProps) => {
  return (
    <div className="w-[666px] bg-Green rounded-[24px] p-[40px]">
      <div className="flex gap-[21px]">
        <div className="w-[264px] flex flex-col gap-[8px]">
          <img src={request.img} alt="" className="rounded-[24px] h-[221px] w-[260px]" />
          <div className="flex h-[139px] w-[264px] rounded-[24px]">
            <InteractiveMap
              className="rounded-[24px] w-full h-full "
            ></InteractiveMap>
          </div>
        </div>
        <div className='flex flex-col items-center w-[320px]'>
          <Typography type={'p3'} color='text-white'>Пользователь {request.name}</Typography>
          <div className='border-[1px] w-full border-[#FFFFFFF]' />
          <Typography type={'p1'} color='text-white' className='text-start mt-[4px]'>{request.text}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;