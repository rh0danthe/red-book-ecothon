import InteractiveMap from "../../components/map/InteractiveMap.tsx";
import { formatCoordinatesToLatLng } from "../../lib/constants/convertCoordinats.ts";
import { Animal } from "../../lib/models/animal.ts";
import { Typography } from "../../components/typography/Typography.tsx";
import AnimalDescriptionList from "../../components/animal-description-list/AnimalDescriptionList.tsx";

interface AnimalDetailsProps {
  animal: Animal;
}
const AnimalDetails = ({ animal }: AnimalDetailsProps) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <Typography
          type={"encyclopediaTitle"}
          color="text-Green"
          className="mt-[80px]"
        >
          {animal.name}
        </Typography>
        <Typography type={"p3"} className="mt-[25px] mb-[80px] text-center">
          {animal.description}
        </Typography>
      </div>
      <div className="flex gap-[44px]">
        <div>
          <img
            src={animal.imageUrl}
            alt="Animal photo"
            className="w-[520px] h-[336px] rounded-[24px] border-[8px] border-Green"
          />
          <div className="grid grid-cols-2 mt-[30px]">
            <Typography type={"p3"} className="font-normal p-[10px]">
              Можно увидеть в:
            </Typography>
            <Typography
              type={"p3"}
              className="font-bold p-[10px] underline text-end"
            >
              Московский парк
            </Typography>
            <Typography type={"p3"} className="font-normal p-[10px]">
              Численность:
            </Typography>
            <Typography
              type={"p3"}
              className="font-bold p-[10px] underline text-end"
            >
              {animal.population}
            </Typography>
            <Typography type={"p3"} className="font-normal p-[10px]">
              Семейство:
            </Typography>
            <Typography
              type={"p3"}
              className="font-bold p-[10px] underline text-end"
            >
              {animal.family}
            </Typography>
          </div>
        </div>
        <div className="flex gap-8 relative h-[580px] w-[1082px]">
          <InteractiveMap
            className="rounded-3xl w-full h-full border-solid border-[6px] border-black"
            polygonCoordinates={formatCoordinatesToLatLng(animal.coordinates)}
          ></InteractiveMap>
        </div>
      </div>
      <AnimalDescriptionList
        appearance={animal.appearance}
        status={animal.status}
        behavior={animal.behaviour}
        nutrition={animal.nutrition}
      />
    </div>
  );
};

export default AnimalDetails;
