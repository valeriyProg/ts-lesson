import { ICandy } from "./candy-interface.ts";
import { IGift } from "./gift-interface.ts";

export interface IBag {
  mix: ICandy[] | null;
}
