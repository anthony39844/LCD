import { api } from "./axiosConfig";

export const getUser = async (username: string) => {
  try {
    const response = await api.get(`/${username}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getDailyQuestion = async () => {
    try {
      const response = await api.get("/daily");
      return response.data; 
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
};

export const getSolved = async () => {
  try {
    const response = await api.get("/anthony39844/solved");
    return response.data; 
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
  