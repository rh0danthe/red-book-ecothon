import { useState } from "react";
import AnimalDescriptionCard from "./animal-description-card/AnimalDescriptionCard.tsx";
import { FaEdit } from "react-icons/fa";

interface IAnimalDescriptionList {
  appearance: string;
  behavior: string;
  status: string;
  nutrition: string;
}

const AnimalDescriptionList = ({ appearance, behavior, status, nutrition }: IAnimalDescriptionList) => {
  const [isEditing, setIsEditing] = useState({
    appearance: false,
    behavior: false,
    status: false,
    nutrition: false,
  });

  const [descriptionValues, setDescriptionValues] = useState({
    appearance,
    behavior,
    status,
    nutrition,
  });

  const handleToggleEdit = (field: keyof typeof isEditing) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleTextChange = (field: keyof typeof descriptionValues, value: string) => {
    setDescriptionValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-row py-16 gap-10 ">
      <div className="flex flex-col gap-10">
        <AnimalDescriptionCard attributeNumber={0}>
          {isEditing.appearance ? (
            <textarea
              value={descriptionValues.appearance}
              onChange={(e) => handleTextChange("appearance", e.target.value)}
              className="  w-[700px] h-32 textarea-input  border-2 border-black rounded-3xl text-xl text-center"
            />
          ) : (
            <span>{descriptionValues.appearance}</span>
          )}
          <button type="button" onClick={() => handleToggleEdit("appearance")} className="ml-2">
            <FaEdit />
          </button>
        </AnimalDescriptionCard>

        <AnimalDescriptionCard attributeNumber={2}>
          {isEditing.status ? (
            <textarea
              value={descriptionValues.status}
              onChange={(e) => handleTextChange("status", e.target.value)}
              className="textarea-input w-[700px] h-32  border-2 border-black rounded-3xl text-xl text-center"
            />
          ) : (
            <span>{descriptionValues.status}</span>
          )}
          <button type="button" onClick={() => handleToggleEdit("status")} className="ml-2">
            <FaEdit />
          </button>
        </AnimalDescriptionCard>
      </div>

      <div className="flex flex-col gap-10">
        <AnimalDescriptionCard attributeNumber={1}>
          {isEditing.behavior ? (
            <textarea
              value={descriptionValues.behavior}
              onChange={(e) => handleTextChange("behavior", e.target.value)}
              className="textarea-input w-[700px] h-32  border-2 border-black rounded-3xl text-xl text-center"
            />
          ) : (
            <span>{descriptionValues.behavior}</span>
          )}
          <button type="button" onClick={() => handleToggleEdit("behavior")} className="ml-2">
            <FaEdit />
          </button>
        </AnimalDescriptionCard>

        <AnimalDescriptionCard attributeNumber={3}>
          {isEditing.nutrition ? (
            <textarea
              value={descriptionValues.nutrition}
              onChange={(e) => handleTextChange("nutrition", e.target.value)}
              className="textarea-input w-[700px] h-32 border-2 border-black rounded-3xl text-xl text-center"
            />
          ) : (
            <span>{descriptionValues.nutrition}</span>
          )}
          <button type="button" onClick={() => handleToggleEdit("nutrition")} className="ml-2">
            <FaEdit />
          </button>
        </AnimalDescriptionCard>
      </div>
    </div>
  );
};

export default AnimalDescriptionList;
