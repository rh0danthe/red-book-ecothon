import AnimalList from "../../components/animal-list/AnimalList";
import { Typography } from "../../components/typography/Typography.tsx";
import SearchAnimal from "../../components/search-animal/SearchAnimal.tsx";

function Encyclopedia() {

  return (
    <div className="pt-[130px] bg-Beige flex flex-col items-center pr-[130px] pl-[130px]">
      <Typography type='encyclopediaTitle' className='text-Green leading-[55px] mb-[25px]'>Энциклопедия</Typography>
      <Typography type='encyclopediaSubtitle' className='text-center text-Green mb-[92px] leading-[24px]'>Здесь представлена подробная информация обо всех краснокнижных видах животных,
        обитающих на <br/> территории Москвы и Московской области.</Typography>
      <SearchAnimal/>
      <AnimalList/>
    </div>
  );
}

export default Encyclopedia;
