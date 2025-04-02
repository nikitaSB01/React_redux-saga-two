import type { ServicesState } from "../features/services/servicesSlice";
import type { DetailsState } from "../features/services/detailsSlice";

export interface RootState {
  services: ServicesState;
  details: DetailsState;
}
