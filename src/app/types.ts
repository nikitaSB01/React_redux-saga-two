import type { ServicesState } from "../features/services/servicesSlice";
import type { DetailsState } from "../features/services/detailsSlice";

export type RootState = {
  services: ServicesState;
  details: DetailsState;
};
