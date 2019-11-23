import { ICandy } from "./interfaces/candy-interface";
import { IBag } from "./interfaces/bag-interface";
import { Product } from "./product";

export class Bag extends Product implements IBag {
  private _mix: ICandy[] = [];
  constructor(
    id: string,
    name: string,
    brand: string,
    price: number,
    img: string,
    weight: number,
    discount: number | null = 0,
    mix: ICandy[] = []
  ) {
    super(id, name, brand, price, img, weight, discount);
    this._mix = mix;
  }
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
    return this._weight;
  }
  get price(): number {
    return this._price;
  }
  get discount(): number {
    return this._discount;
  }
  get mix(): ICandy[] {
    return this._mix;
  }
  toString(): string {
    let mix: string = "";
    this._mix.forEach((element, index) => {
      mix += `Item: #${index}; 
              Name: ${element.name};
              Brand: ${element.brand};
              Price:${element.price}; \n`;
    });
    return `id: ${this._id};
     img: ${this._img}; 
     name: ${this._name}; 
     brand:${this._brand}; 
     weight: ${this._weight}; 
     price:${this._price};
     discount:${this._discount};
     mix: ${mix}`;
  }
}
