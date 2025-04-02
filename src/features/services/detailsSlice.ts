import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "./types";

export interface DetailsState {
  item: Service | null;
  loading: boolean;
  error: string | null;
}

const initialState: DetailsState = {
  item: null,
  loading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    fetchServiceDetails: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _action: PayloadAction<number>
    ) => {
      state.loading = true;
      state.error = null;
      state.item = null;
    },
    fetchServiceDetailsSuccess: (state, action: PayloadAction<Service>) => {
      state.loading = false;
      state.item = action.payload;
    },
    fetchServiceDetailsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchServiceDetails,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} = detailsSlice.actions;

export default detailsSlice.reducer;
