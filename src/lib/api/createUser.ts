import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface CreateUserPayload {
  email: string;
}

export const createUser = async ({ email }: CreateUserPayload) => {
  if (!email) {
    throw new Error("Введите email");
  }
  try {
    await axios.post(
      `${API_BASE_URL}/auth/register`,
      { email } 
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Не получилось создать пользователя: " + error.message);
    } else {
      throw new Error("Не получилось создать пользователя: Неизвестная ошибка");
    }
  }
};
