// export interface Bag {
//   id: string;
//   img: string;
//   name: string;
//   weight: number;
//   mix: Candy[];
// }
export class Bag {
  constructor(
    private _id: string,
    private _img: string,
    private _name: string,
    private _weight: number
  ) {}
  set id(id: string): void {
    this._id = id;
  }
  get id(): string {
    return this._id;
  }
}
