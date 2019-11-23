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
