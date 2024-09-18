import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import LoginTextBox from "../../components/textbox/LoginTextBox.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateAnimal } from "../../lib/api/animalApi/updateAnimal";
import { getAnimalById } from "../../lib/api/animalApi/getAnimalById";
import { Animal } from "../../lib/models/animal";
import ComboBox from "../../components/combobox/Combobox";
import { animalOptions } from "../../lib/constants/animalOptions";
import InteractiveMap from "../../components/map/InteractiveMap";
import { LatLngTuple } from "leaflet";
import { formatCoordinatesToLatLng, formatLatLngToCoordinates } from "../../lib/constants/convertCoordinats";
import FileUpload from "../../components/file-upload/FileUpload";

function AnimalUpdateForm() {
  const methods = useForm();
  const { setValue } = methods;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const [animal, setAnimal] = useState<Animal | null>(null);
  const [coordinates, setCoordinates] = useState<LatLngTuple[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
  
      const updatedCoordinates = [...currentCoordinates, ...formattedNewCoordinates];
      setValue("coordinates", updatedCoordinates);
    }
  };
  

  const onSubmit = async () => {
    const data = methods.getValues();
    try {
      await updateAnimal(
        { name: data.name, description: data.description, type: data.type, coordinates: data.coordinates, image: data.file},
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="pt-24">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <FileUpload name="file" control={methods.control} />
        <LoginTextBox
          label="Введите имя животного"
          name="name"
          value={animal?.name}
        ></LoginTextBox>
        <LoginTextBox
          label="Введите описание животного"
          name="description"
          value={animal?.description}
        ></LoginTextBox>
        <ComboBox options={animalOptions} name="type"></ComboBox>
        <InteractiveMap
          className="w-1/2"
          canDraw={true}
          canEdit={true}
          polygonCoordinates={coordinates}
          onCoordinatesChange={handleCoordinatesChange} 
        ></InteractiveMap>
        <Button colorBehavior="white" type="submit" fontBehaviour="p4">
          Обновить данные
        </Button>
      </form>
    </FormProvider>
  );
}

export default AnimalUpdateForm;

