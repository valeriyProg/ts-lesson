import { Product } from "./product";
import { IList } from "./interfaces/list";
import { ChocolateBar } from "./chocolate-bar";
import { Bag } from "./bag";

export class ProductList implements IList<Product> {
  // private _list: Product[] = [];
  private _list: Product[] = [
    new ChocolateBar(
      "AFTR12",
      "Dark Chocolate 60%",
      "Lindt",
      13.7,
      "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/small_image/166x166/9df78eab33525d08d6e5fb8d27136e95/3/0/3046920010603_t1_1.png",
      94,
      0.2
    ),
    new Bag(
      "AFTR12",
      "Lindor Irresistibly Smooth Assorted Silver Collection",
      "Lindt",
      22.3,
      "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/thumbnail/68x/9df78eab33525d08d6e5fb8d27136e95/l/i/lindor_silver_selection_box_500g_-_2019_version.png",
      500,
      0.2,
      [
        {
          id: "AFTR111212",
          name: "Dark Chocolate Truffle 60%",
          brand: "Lindt",
          price: 0.6,
          img:
            "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/thumbnail/215x231/040ec09b1e35df139433887a97daa66f/l/i/lindor_60_dark_truffles_1_3.png",
          weight: 0.33,
          discount: null,
          count: 12
        },
        {
          id: "1332AFTR111212",
          name: "Milk Chocolate Truffle 40%",
          brand: "Lindor",
          price: 0.6,
          img:
            "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/thumbnail/215x231/040ec09b1e35df139433887a97daa66f/m/i/milk.png",
          weight: 0.33,
          discount: null,
          count: 16
        }
      ]
    ),

    new Bag(
      "AFTR12",
      "Pick & Mix Bag",
      "Lindt",
      12.0,
      "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/thumbnail/68x/9df78eab33525d08d6e5fb8d27136e95/l/i/lindor_pick_and_mix_400g_122x145px.png",
      400,
      0.2,
      [
        {
          id: "AFTR111212",
          name: "Dark Chocolate Truffle 60%",
          brand: "Lindt",
          price: 0.6,
          img:
            "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/thumbnail/215x231/040ec09b1e35df139433887a97daa66f/l/i/lindor_60_dark_truffles_1_3.png",
          weight: 0.33,
          discount: null,
          count: 12
        },
        {
          id: "1332AFTR111212",
          name: "Milk Chocolate Truffle 40%",
          brand: "Lindor",
          price: 0.6,
          img:
            "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/thumbnail/215x231/040ec09b1e35df139433887a97daa66f/m/i/milk.png",
          weight: 0.33,
          discount: null,
          count: 16
        }
      ]
    )
  ];

  constructor(items?: Product[]) {
    if (items) {
      this._list = items;
    }
  }

  add(item: Product): void {
    this._list.push(item);
  }
  remove(item: Product): void {
    let searchIndex = this._list.indexOf(item);
    this._list.filter((item, index) => {
      if (searchIndex === index) {
        return false;
      }
    });
    console.log(this._list);
  }
  indexOf(item: Product): number {
    return this._list.indexOf(item);
  }
  get list(): Product[] {
    return this._list;
  }
}
