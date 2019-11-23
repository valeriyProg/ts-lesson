import { IGift } from "./interfaces/gift-interface.ts";
export abstract class Product implements IGift {
  constructor(
    protected _id: string,
    protected _name: string,
    protected _brand: string,
    protected _price: number,
    protected _img: string,
    protected _weight: number,
    protected _discount: number | null
  ) {}
  abstract toString(): string;
}
