import { Product } from "./product.ts";

export class ChocolateBar extends Product {
  constructor(
    id: string,
    name: string,
    img: string,
    brand: string,
    weight: number,
    price: number,
    mix: Candy[] = [],
    discount: number | null = 0
  ) {
    super(id, name, img, brand, weight, price, discount);
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
    return this.__weight;
  }
  get price(): number {
    return this.__price;
  }
  get discount(): number {
    return this.__discount;
  }
  toString(): string {
    return `id: ${this.id};
     img: ${this.img}; 
     name: ${this.name}; 
     brand:${this.brand}; 
     weight: ${this.weight}; 
     price:${this.price};
     discount:${this.discount};`;
  }
}
