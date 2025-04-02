import axios from "axios";
import { Service } from "../features/services/types";

const API_BASE = "https://react-redux-saga-two-bac.onrender.com/api/services";

export const servicesApi = {
  async getServices(): Promise<Service[]> {
    const response = await axios.get<Service[]>(API_BASE);
    return response.data;
  },

  async getServiceById(id: number): Promise<Service> {
    const response = await axios.get<Service>(`${API_BASE}/${id}`);
    return response.data;
  },
};
