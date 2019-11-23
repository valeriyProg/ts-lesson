import { IGift } from "./interfaces/gift-interface.ts";

export class ChocolateBar implements IGift {
  constructor(
    private _id: string,
    private _img: string,
    private _name: string,
    private _brand: string,
    private _weight: number,
    private _price: number,
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
}
