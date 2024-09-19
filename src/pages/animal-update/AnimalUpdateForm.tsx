import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateAnimal } from "../../lib/api/animalApi/updateAnimal";
import { getAnimalById } from "../../lib/api/animalApi/getAnimalById";
import { Animal } from "../../lib/models/animal";
import InteractiveMap from "../../components/map/InteractiveMap";
import { LatLngTuple } from "leaflet";
import {
  formatCoordinatesToLatLng,
  formatLatLngToCoordinates,
} from "../../lib/constants/convertCoordinats";
import { Typography } from "../../components/typography/Typography.tsx";
import AnimalDescriptionList from "../../components/animal-description-list/AnimalDescriptionList.tsx";
import { FaEdit } from "react-icons/fa";
import FileUpload from "../../components/file-upload/FileUpload";

function AnimalUpdateForm() {
  type EditableFields = "name" | "description" | "population" | "family";
  const methods = useForm();
  const { setValue } = methods;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const [animal, setAnimal] = useState<Animal | null>(null);
  const [coordinates, setCoordinates] = useState<LatLngTuple[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState({
    name: false,
    description: false,
    population: false,
    family: false,
  });

  const animalId = Number(id);

  useEffect(() => {
    if (isNaN(animalId)) {
      setError("Invalid animal ID.");
      setLoading(false);
      return;
    }

    const fetchAnimalData = async () => {
      try {
        setLoading(true);
        const data = await getAnimalById(animalId);
        if (!data) {
          setError("Animal not found.");
          return;
        }
        setAnimal(data);
        const coords = data.coordinates;
        if (!coords || coords.length === 0) {
          setError("Coordinates not found.");
          setCoordinates([]);
        } else {
          setCoordinates(formatCoordinatesToLatLng(coords));
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalData();
  }, [id]);

  const handleCoordinatesChange = (newCoordinates: LatLngTuple[][]) => {
    if (newCoordinates.length > 0) {
      const currentCoordinates = methods.getValues("coordinates") || [];

      let formattedNewCoordinates = formatLatLngToCoordinates(newCoordinates);

      const updatedCoordinates = [
        ...currentCoordinates,
        ...formattedNewCoordinates,
      ];
      setValue("coordinates", updatedCoordinates);
    }
  };

  const onSubmit = async () => {
    const data = methods.getValues();
    try {
      await updateAnimal(
        {
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
        },
        animalId,
      );
      navigate(`/animal/${animalId}`);
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
    setAnimal((prev) => prev && { ...prev, [field]: value });
    setValue(field, value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="pt-24 bg-[#fbfef1]">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {animal && (
          <div className="flex flex-col items-center justify-center">
            <div>
              <div>
              <Button
              colorBehavior="trans"
              fontBehaviour="p3"
              className="mt-6 w-[311px] absolute top-[200px] right-32"
              onClick={() => navigate(`/animal/${animalId}`)}
            >
              Отменить
            </Button>
            <Button
              colorBehavior="green"
              fontBehaviour="p3"
              className="mt-6 w-[311px] absolute top-[280px] right-32"
              type="submit"
            >
              Сохранить изменения
            </Button>
            </div>

              <div className="flex items-center justify-center">
                {isEditing.name ? (
                  <input
                    type="text"
                    value={animal.name}
                    onChange={(e) => handleTextChange("name", e.target.value)}
                    className="text-input h-16 mt-[80px] border-2 border-black rounded-3xl text-3xl "
                  />
                ) : (
                  <Typography
                    type={"encyclopediaTitle"}
                    color="text-Green"
                    className="mt-[80px] text-center"
                  >
                    {animal.name}
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
                    value={animal.description}
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
                    {animal.description}
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
                        value={animal.population}
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
                        {animal.population}
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
                        value={animal.family}
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
                        {animal.family}
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
                  canEdit={true}
                  polygonCoordinates={coordinates}
                  onCoordinatesChange={handleCoordinatesChange}
                ></InteractiveMap>
              </div>
            </div>
            <AnimalDescriptionList
              appearance={animal.appearance}
              status={animal.status}
              nutrition={animal.nutrition}
              behavior={animal.behaviour}
            />
          </div>
        )}
      </form>
    </FormProvider>
  );
}

export default AnimalUpdateForm;
