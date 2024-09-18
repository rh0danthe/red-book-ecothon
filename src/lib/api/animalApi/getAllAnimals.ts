import axios from "axios";
import { Animal } from "../../models/animal";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getAllAnimals = async (): Promise<Animal[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/animal`);
    return response.data.animals;
  } catch (error) {
    throw new Error("Failed to fetch animals: " + (error as Error).message);
  }
};
