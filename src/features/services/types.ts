export interface Service {
  id: number;
  name: string;
  price: number;
  content: string;
}

export interface ServicesState {
  items: Service[];
  loading: boolean;
  error: string | null;
}
