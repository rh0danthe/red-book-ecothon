import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const deleteAnimal = async (id: number): Promise<Boolean> => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/animal/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to delete animal: " + error.message);
    } else {
      throw new Error("Failed to delete animal: Unknown error occurred");
    }
  }
};
 