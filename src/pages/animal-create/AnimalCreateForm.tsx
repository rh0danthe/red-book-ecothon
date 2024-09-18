import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import TextBox from "../../components/textbox/TextBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAnimal } from "../../lib/api/animalApi/createAnimal";
import ComboBox from "../../components/combobox/Combobox";
import { animalOptions } from "../../lib/constants/animalOptions";
import InteractiveMap from "../../components/map/InteractiveMap";
import { LatLngTuple } from "leaflet";
import { formatLatLngToCoordinates } from "../../lib/constants/convertCoordinats";
import FileUpload from "../../components/file-upload/FileUpload";

function AnimalCreateForm() {
  const methods = useForm();
  const { setValue } = methods;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        image: data.file
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

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="pt-24">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  
        <TextBox label="Введите имя животного" name="name" />
        <TextBox label="Введите описание животного" name="description" />
        <ComboBox options={animalOptions} name="type" />
        <InteractiveMap className="w-1/2" canDraw={true} onCoordinatesChange={handleCoordinatesChange} />
        <FileUpload name="file" control={methods.control} />
        <Button colorBehavior="green" type="submit" fontBehaviour="p4">
          Создать животное
        </Button>
      </form>
    </FormProvider>
  );
}

export default AnimalCreateForm;
