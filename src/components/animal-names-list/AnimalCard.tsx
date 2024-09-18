import { Animal } from "../../lib/models/animal";
import { Typography } from "../typography/Typography";

interface IAnimalCard {
  animal: Animal;
  onClick?: () => void;
}

function AnimalCard({ animal, onClick }: IAnimalCard) {
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 rounded-[24px] shadow-sm
       bg-Green w-full h-full flex flex-col justify-between items-center hover:bg-[#1f2212ec] group"
    >
      <div className="p-[8px] z-10">
        <img
          src={animal.imageUrl}
          alt="Animal photo"
          className="w-full pt-1 h-[280px] rounded-[20px] group-hover:opacity-80"
        />
        <div className="flex flex-col ml-[24px] mt-[16px] group-hover:opacity-80">
          <Typography type="p4" className="text-white pr-6">
            {animal.name}
          </Typography>
          <svg width="320" height="20">
            <line
              x1="15"
              y1="0"
              x2="320"
              y2="0"
              stroke="#fbfef1"
              stroke-width="2"
            />
          </svg>
          <div className="w-[334px] h-[190px] line-overflow2 trunkate">
          <Typography type="p3" className="text-white break-words ">
            {animal.description}
          </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
