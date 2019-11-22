export interface Item<T> {
  name: string;
  brand: string;
  price: number;
  img: string;
  weight: number;
  bag?: T;
}
