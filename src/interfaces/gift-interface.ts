export interface IGift {
  id: string;
  name: string;
  brand: string;
  price: number;
  img: string;
  weight: number;
  discount?: number | null;
}
