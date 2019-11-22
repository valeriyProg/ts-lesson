export interface Gift {
  name: string;
  brand: string;
  price: number;
  img: string;
  weight: number;
  discount?: number | null;
  mix?: Candy[] | null;
}
