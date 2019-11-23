import { Product } from "./product";

export class ChocolateBar extends Product {
  constructor(
    id: string,
    name: string,
    brand: string,
    price: number,
    img: string,
    weight: number,
    discount: number | null = 0
  ) {
    super(id, name, brand, price, img, weight, discount);
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
