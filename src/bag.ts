import { ICandy } from "./interfaces/candy-interface.ts";
import { IBag } from "./interfaces/bag-interface.ts";

export class Bag extends Product implements IBag {
  constructor(
    private _id: string,
    private _name: string,
    private _img: string,
    private _brand: string,
    private _weight: number,
    private _price: number,
    private _mix: Candy[] = [],
    private _discount: number | null = 0
  ) {}

  get id(): string {
    return this._id;
  }
  get img(): string {
    return this._img;
  }
  get name(): string {
    return this._name;
  }
  get brand(): string {
    return this._brand;
  }
  get weight(): number {
    return this.__weight;
  }
  get price(): number {
    return this.__price;
  }
  get discount(): number {
    return this.__discount;
  }
  get mix(): ICandy[] {
    return this._mix;
  }
}

// constructor(
//     private _id: string,
//     private _name: string,
//     private _img: string,
//     private _brand: string,
//     private _weight: number,
//     private _price: number,
//     private _mix: Candy[] = [],
//     private _discount: number | null = 0
//   ) {}
