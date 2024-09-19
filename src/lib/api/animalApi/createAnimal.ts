import axios from "axios";
import { Animal, AnimalCreate } from "../../models/animal";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createAnimal = async (animal: AnimalCreate): Promise<Animal> => {
  if (
    !animal.name ||
    !animal.description ||
    !animal.population ||
    !animal.family ||
    !animal.appearance ||
    !animal.behavior ||
    !animal.status ||
    !animal.nutrition ||
    !animal.coordinates ||
    !animal.type ||
    !animal.image
  ) {
    throw new Error("Animal data is missing or invalid");
  }

  try {
    const formData = new FormData();
    formData.append("name", animal.name);
    formData.append("description", animal.description);
    formData.append("reason", animal.reason);
    formData.append("type", animal.type);
    formData.append("population", animal.population);
    formData.append("family", animal.family);
    formData.append("appearance", animal.appearance);
    formData.append("behavior", animal.behavior);
    formData.append("status", animal.status);
    formData.append("nutrition", animal.nutrition);
    formData.append("coordinates", JSON.stringify(animal.coordinates));
    formData.append("image", animal.image);
    formData.append("population", animal.image);

    const response = await axios.post<Animal>(`${API_BASE_URL}/animal`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to create animal: " + error.message);
    } else {
      throw new Error("Failed to create animal: Unknown error occurred");
    }
  }
};
