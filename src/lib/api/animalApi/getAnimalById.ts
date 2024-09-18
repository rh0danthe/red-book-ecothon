import axios from "axios";
import { Animal } from "../../models/animal";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getAnimalById = async (id: number): Promise<Animal> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/animal/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch animal data: " + error.message);
    } else {
      throw new Error("Failed to fetch animal data: Unknown error occurred");
    }
  }
};
