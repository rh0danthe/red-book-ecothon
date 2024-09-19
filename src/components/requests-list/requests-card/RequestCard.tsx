import { MyRequest } from "../../../lib/models/MyRequest.ts";
import { Typography } from "../../typography/Typography.tsx";
import Button from "../../button/Button.tsx";
import InteractiveMap from "../../map/InteractiveMap.tsx";
import { useState } from "react";

interface IRequestCard {
  request: MyRequest; 
}
const RequestCard = ({request} : IRequestCard) => {
  const [isPublishing, setIsPublishing] = useState(false);
  
  const onClickPublish = () => {
    setIsPublishing(true);
  }
  const onClickCancelPublishing = () => {
    setIsPublishing(false);
  }
  
  return (
    <div>
      {isPublishing ?
        <div className="flex flex-col items-center w-[666px] h-full bg-Green rounded-[24px] pt-[124px] pb-[137px]">
          <Typography type={"p4"} color="text-white" className='text-center mb-[60px]'>Укажите полное название животного о котором говорится в
            обращении</Typography>
          <input
            type="text"
            className="w-1/2 h-[75px]  p-[26px] pl-[35px]  rounded-[24px] focus:outline-none focus:ring focus:ring-blue-500
            font-raleway text-[20px] text-[#FBFEF1] placeholder:font-raleway placeholder:text-[20px] placeholder:text-[#FBFEF1] bg-[#ECEDE8] bg-opacity-20"
            placeholder="Название"
          />
          <div className='flex justify-center mt-[30px] gap-[20px] h-[52px]'>
            <Button colorBehavior={'white'} fontBehaviour={'p3'} color='text-Green' className='w-[240px]'>Создать</Button>
            <Button onClick={onClickCancelPublishing} colorBehavior={'white'} fontBehaviour={'p3'} color='text-Green' className='w-[240px] '>Отменить</Button>
          </div>
        </div>
        :
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
          <div className='flex justify-center gap-[31px] mt-[31px] bg-transparents'>
            <Button onClick={onClickPublish} colorBehavior={'publish'} fontBehaviour={'p3'} className='w-[264px] h-[52px]'>Опубликовать</Button>
            <Button colorBehavior={'decline'} fontBehaviour={'p3'} className='w-[264px] h-[52px]'>Отклонить</Button>
          </div>
        </div>
      }
    </div>

  );
};

export default RequestCard;