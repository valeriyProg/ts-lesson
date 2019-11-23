import { IGift } from "./interfaces/gift-interface";

export abstract class Product {
  constructor(
    protected _id: string,
    protected _name: string,
    protected _brand: string,
    protected _price: number,
    protected _img: string,
    protected _weight: number,
    protected _discount: number | null = null
  ) // public id: string,
  // public name: string,
  // public brand: string,
  // public price: number,
  // public img: string,
  // public weight: number,
  // public discount: number | null
  {}
  abstract toString(): string;
}
