import { Animal } from "../../../lib/models/animal";
import {Typography} from "../../typography/Typography";
import { useState } from "react";
import Button from "../../button/Button.tsx";

interface IAnimalCard {
  animal: Animal;
  onClick?: () => void;
}

function AnimalCard({ animal, onClick }: IAnimalCard) {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseOver = () => {
    setIsHovering(true);
  }
  const onMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <div
      onMouseOver={onMouseOver} onMouseOut={onMouseOut}
      className="border border-gray-300 rounded-[24px] mb-4 shadow-sm bg-Green w-[100%] h-[455px] flex flex-col justify-between"
    >
      <div className='p-[8px] relative'>
        <img src={animal.imageUrl} alt="Animal photo" className="w-[100%] h-[280px] rounded-[20px]"/>
        <div className='flex flex-col gap-[16px] ml-[24px] mt-[16px]'>
          <Typography type='cardName' className='text-white'>{animal.name} </Typography>
          <Typography type='cardDescription' className='text-white line-overflow'>{animal.description}</Typography>
        </div>
      </div>
      <div className='shadow'>
        {isHovering && <Button onClick={onClick} colorBehavior={'white'}  fontBehaviour={'p4'} 
                               className='absolute translate-y-[-70px] h-[70px] desktop:w-[370px] laptop:w-[275px]  
                               border-Green border-[12px]'>Читать далее...</Button>}
      </div>
    </div>
  );
}

export default AnimalCard;
