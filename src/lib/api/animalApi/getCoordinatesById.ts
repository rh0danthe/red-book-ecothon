import axios from "axios";
import { Coordinates } from "../../models/coordinates";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getCoordinatesById = async (id: number): Promise<Coordinates[][]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/animal/${id}/coordinates`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch coordinates: " + error.message);
    } else {
      throw new Error("Failed to fetch coordinates: Unknown error occurred");
    }
  }
};
