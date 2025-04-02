import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "./types";

export interface ServicesState {
  list: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  list: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServices: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchServicesSuccess: (state, action: PayloadAction<Service[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchServicesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchServices, fetchServicesSuccess, fetchServicesFailure } =
  servicesSlice.actions;

export default servicesSlice.reducer;
