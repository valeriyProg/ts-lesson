import { Product } from "./product";
import { IList } from "./interfaces/list";

export class ProductList implements IList<Product> {
  add(item: Product): void {}
  remove(item: Product): void {}
  indexOf(item: Product): number {
    //
    //
    //
    return 0;
  }
}
