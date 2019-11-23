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
    return this.id;
  }
  get img(): string {
    return this.img;
  }
  get name(): string {
    return this.name;
  }
  get brand(): string {
    return this.brand;
  }
  get weight(): number {
    return this.weight;
  }
  get price(): number {
    return this.price;
  }
  get discount(): number {
    return this.discount;
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
