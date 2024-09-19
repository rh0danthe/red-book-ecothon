import axios from "axios";
import { LoginCredentials } from "../models/loginCredentials";
import { Token } from "../models/token";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const sendLoginCredentials = async (credentials: LoginCredentials) => {
  if (!credentials.email || !credentials.password) {
    throw new Error("Email and password are required");
  }
  try {
    const response = await axios.post<Token>(
      `${API_BASE_URL}/auth/login`,
      credentials,
    );
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("role", response.data.role.toString());
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to login: " + error.message);
    } else {
      throw new Error("Failed to login: Unknown error occurred");
    }
  }
};
