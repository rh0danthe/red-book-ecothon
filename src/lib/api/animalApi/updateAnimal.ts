import axios from "axios";
import { Animal, AnimalUpdate } from "../../models/animal";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const updateAnimal = async (
  animal: AnimalUpdate,
  id: number,
): Promise<Animal> => {
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
    formData.append("type", animal.type);
    formData.append("coordinates", JSON.stringify(animal.coordinates));
    formData.append("image", animal.image);

    const response = await axios.patch<Animal>(
      `${API_BASE_URL}/api/book-element/${id}`,formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to update animal data: " + error.message);
    } else {
      throw new Error("Failed to update animal data: Unknown error occurred");
    }
  }
};
