import InteractiveMap from "../../components/map/InteractiveMap.tsx";
import { formatCoordinatesToLatLng } from "../../lib/constants/convertCoordinats.ts";
import { Animal } from "../../lib/models/animal.ts";
import { Typography } from "../../components/typography/Typography.tsx";
import AnimalDescriptionList from "../../components/animal-description-list/AnimalDescriptionList.tsx";

import { SimpleSlider } from "../../components/slider/slider";
import { MyRequest } from "../../lib/models/MyRequest.ts";

interface AnimalDetailsProps {
  animal: Animal;
}
const AnimalDetails = ({ animal }: AnimalDetailsProps) => {
  const request: MyRequest[] = [
    {
      id: 1,
      text: "sdfsdfdsfs sdf sdf sdf sdf sd",
      name: "ivan",
      img: "https://www.ecosystema.ru/08nature/birds/026.jpg",
      geo: [1233, 1234],
    },
    {
      id: 1,
      text: "sdfsdfdsfs sdf sdf sdf sdf sd",
      name: "ivan",
      img: "https://www.ecosystema.ru/08nature/birds/026.jpg",
      geo: [1233, 1234],
    },
    {
      id: 1,
      text: "sdfsdfdsfs sdf sdf sdf sdf sd",
      name: "ivan",
      img: "https://www.ecosystema.ru/08nature/birds/026.jpg",
      geo: [1233, 1234],
    },
    {
      id: 1,
      text: "sdfsdfdsfs sdf sdf sdf sdf sd",
      name: "ivan",
      img: "https://www.ecosystema.ru/08nature/birds/026.jpg",
      geo: [1233, 1234],
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
  <div className="text-center">
    <Typography
      type={"encyclopediaTitle"}
      color="text-Green"
      className="mt-[80px]"
    >
      {animal.name}
    </Typography> 
    <Typography type={"p3"} className="mt-[25px] mb-[80px]">
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
      <div className="w-[1660px] border-[1px] border-Green rounded-[24px] flex flex-col items-center mt-[102px]">
        <Typography type={"h3"} className="mt-[30px] mb-[30px]">
          Наши пользователи встречали {animal.name}
        </Typography>
        <SimpleSlider requests={request} />
        <Typography type={"p1"} className="mb-[24px]">
          Тоже видели {animal.name}? Расскажите нам об этом в{" "}
          <a href="" className="hover:underline">
            Чат-боте
          </a>
        </Typography>
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
