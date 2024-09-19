import { Typography } from "../../typography/Typography.tsx";

interface IAnimalDescriptionCard {
  attributeNumber: number;
  children?: React.ReactNode;
}
const AnimalDescriptionCard = ({children, attributeNumber}: IAnimalDescriptionCard) => {
  const attributes = ["Внешний вид", "Поведение и образ жизни", "Охрана и статус", "Питание"];
  return (
    <div className='flex flex-col items-center w-[800px] pl-[51px] pr-[51px] pt-[35px] pb-[65px] border-[1px] border-[#000000] rounded-[24px]'>
      <Typography type={'h3'} className='font-bold'>{attributes[attributeNumber]}</Typography>
      <div className='w-[700px] border-b-[1px] border-[#000000] mt-[25px] mb-[25px]'/>
      <Typography type={'p3'} className='font-[500]'>{children}</Typography>
    </div>
  );
};

export default AnimalDescriptionCard;