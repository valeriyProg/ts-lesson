import { ICandy } from "./interfaces/candy-interface.ts";
import { IBag } from "./interfaces/bag-interface.ts";
import { Product } from "./product.ts";

export class Bag extends Product implements IBag {
  private _mix: ICandy[] = [];
  constructor(
    id: string,
    name: string,
    img: string,
    brand: string,
    weight: number,
    price: number,
    mix: ICandy[] = [],
    discount: number | null = 0
  ) {
    super(id, name, img, brand, weight, price, discount);
    this._mix = mix;
  }
  id(): string {
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
              Name: ${emelement.name};
              Brand: ${emelement.brand};
              Price:${emelement.price}; \n`;
    });
    return `id: ${this.id};
     img: ${this.img}; 
     name: ${this.name}; 
     brand:${this.brand}; 
     weight: ${this.weight}; 
     price:${this.price};
     discount:${this.discount};
     mux: ${mix}`;
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
