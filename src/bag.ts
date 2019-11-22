import { Candy } from "./candy.ts";
import { Gift } from "./gift.ts";
export class Bag {
  constructor(private _gift: Gift) {}
  get id(): string {
    return this._id;
  }
  get img(): string {
    return this._img;
  }
  get name(): string {
    return this._name;
  }
  get _weight(): number {
    return this.__weight;
  }
  get mix(): Candy[] {
    return this._mix;
  }
}

//  constructor(
//     private _gift: string,
//     private _img: string,
//     private _name: string,
//     private _weight: number,
//     private _mix: Candy[]
//   )
