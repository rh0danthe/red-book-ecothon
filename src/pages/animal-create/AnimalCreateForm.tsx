import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAnimal } from "../../lib/api/animalApi/createAnimal";
import InteractiveMap from "../../components/map/InteractiveMap";
import { LatLngTuple } from "leaflet";
import { formatLatLngToCoordinates } from "../../lib/constants/convertCoordinats";
import FileUpload from "../../components/file-upload/FileUpload";
import AnimalDescriptionList from "../../components/animal-description-list/AnimalDescriptionList.tsx";
import { FaEdit } from "react-icons/fa";
import { Typography } from "../../components/typography/Typography.tsx";

function AnimalCreateForm() {
  type EditableFields = "name" | "description" | "population" | "family";
  const methods = useForm();
  const { setValue } = methods;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState({
    name: false,
    description: false,
    population: false,
    family: false,
  });

  const handleCoordinatesChange = (newCoordinates: LatLngTuple[][]) => {
    if (newCoordinates.length > 0) {
      const currentCoordinates = methods.getValues("coordinates") || [];
  
      let formattedNewCoordinates = formatLatLngToCoordinates(newCoordinates);
  
      const updatedCoordinates = [...currentCoordinates, ...formattedNewCoordinates];
      setValue("coordinates", updatedCoordinates);
    }
  };

  const onSubmit = async (data: any) => {
    console.log("Form data on submit:", data);
    try {
      await createAnimal({
        name: data.name,
        description: data.description,
        type: data.type,
        coordinates: data.coordinates,
        image: data.file,
        reason: data.reason,
        population: data.population,
        family: data.family,
        appearance: data.appearance,
        behavior: data.behavior,
        status: data.status,
        nutrition: data.nutrition,
      });
      navigate("/encyclopedia");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Произошла неизвестная ошибка.",
      );
    }
  };

  const toggleEdit = (field: EditableFields) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleTextChange = (field: string, value: string) => {
    setValue(field, value);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="pt-24 bg-[#fbfef1]">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="flex flex-col items-center justify-center">
            <div>
              <div>
              <Button
              colorBehavior="trans"
              fontBehaviour="p3"
              className="mt-6 w-[311px] absolute top-[200px] right-64"
              onClick={() => navigate(`/encyclopedia`)}
            >
              Назад
            </Button>
            <Button
              colorBehavior="green"
              fontBehaviour="p3"
              className="mt-6 w-[311px] absolute top-[280px] right-64"
              type="submit"
            >
              Создать
            </Button>
            </div>

              <div className="flex items-center justify-center">
                {isEditing.name ? (
                  <input
                    type="text"
                    value={"Введите"}
                    onChange={(e) => handleTextChange("name", e.target.value)}
                    className="text-input h-16 mt-[80px] border-2 border-black rounded-3xl text-3xl "
                  />
                ) : (
                  <Typography
                    type={"encyclopediaTitle"}
                    color="text-Green"
                    className="mt-[80px] text-center"
                  >
                    {"Введите"}
                  </Typography>
                )}
                <button
                  type="button"
                  onClick={() => toggleEdit("name")}
                  className="ml-2 mt-[130px]"
                >
                  <FaEdit />
                </button>
              </div>

              <div className="flex items-center justify-center">
                {isEditing.description ? (
                  <textarea
                    value={"Введите"}
                    onChange={(e) =>
                      handleTextChange("description", e.target.value)
                    }
                    className="textarea-input h-12 border-2 border-black rounded-3xl text-xl mb-20 mt-4 text-center "
                  />
                ) : (
                  <Typography
                    type={"p3"}
                    className="mt-[25px] mb-[80px] text-center"
                  >
                    {"Введите"}
                  </Typography>
                )}
                <button
                  type="button"
                  onClick={() => toggleEdit("description")}
                  className="ml-2"
                >
                  <FaEdit />
                </button>
              </div>
            </div>

            <div className="flex gap-[44px]">
              <div>
                <div className="w-[520px] h-[336px] ">
                <FileUpload name="file" control={methods.control} className="w-full h-full"></FileUpload>
                </div>
        
                <div className="grid grid-cols-2 gap-x-4 mt-[30px]">
                  <Typography type={"p3"} className="font-normal p-[10px]">
                    Можно увидеть в:
                  </Typography>
                  <Typography
                    type={"p3"}
                    className="font-bold p-[10px] underline text-end"
                  >
                    Москворецкий парк
                  </Typography>

                  <Typography type={"p3"} className="font-normal p-[10px]">
                    Численность:
                  </Typography>
                  <div className="flex items-center justify-end p-[10px]">
                    {isEditing.population ? (
                      <input
                        type="text"
                        value={"Введите"}
                        onChange={(e) =>
                          handleTextChange("population", e.target.value)
                        }
                        className="text-input text-end"
                      />
                    ) : (
                      <Typography
                        type={"p3"}
                        className="font-bold underline text-end"
                      >
                        {"Введите"}
                      </Typography>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleEdit("population")}
                      className="ml-2"
                    >
                      <FaEdit />
                    </button>
                  </div>

                  <Typography type={"p3"} className="font-normal p-[10px]">
                    Семейство:
                  </Typography>
                  <div className="flex items-center justify-end p-[10px]">
                    {isEditing.family ? (
                      <input
                        type="text"
                        value={"Введите"}
                        onChange={(e) =>
                          handleTextChange("family", e.target.value)
                        }
                        className="text-input text-end"
                      />
                    ) : (
                      <Typography
                        type={"p3"}
                        className="font-bold underline text-end"
                      >
                        {"Введите"}
                      </Typography>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleEdit("family")}
                      className="ml-2"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 relative h-[580px] w-[1082px]">
                <InteractiveMap
                  className="rounded-3xl w-full h-full border-solid border-[6px] border-black"
                  canDraw={true}
                  onCoordinatesChange={handleCoordinatesChange}
                ></InteractiveMap>
              </div>
            </div>
            <AnimalDescriptionList
              appearance="Введите"
              status="Введите"
              nutrition="Введите"
              behavior="Введите"
            />
          </div>
      </form>
    </FormProvider>
  );
}

export default AnimalCreateForm;
