import AnimalDescriptionCard from "./animal-description-card/AnimalDescriptionCard.tsx";

interface IAnimalDescriptionList {
  appearance: string;
  behavior: string;
  status: string;
  nutrition: string
}
const AnimalDescriptionList = ({appearance, behavior, status, nutrition}: IAnimalDescriptionList) => {
  return (
    <div className='grid grid-cols-2 gap-[44px] p-[44px]'>
      <AnimalDescriptionCard attribute={appearance} attributeNumber={0}/>
      <AnimalDescriptionCard attribute={behavior} attributeNumber={1}/>
      <AnimalDescriptionCard attribute={status} attributeNumber={2}/>
      <AnimalDescriptionCard attribute={nutrition} attributeNumber={3}/>
    </div>
  );
};

export default AnimalDescriptionList;