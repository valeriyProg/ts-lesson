import { ChocolateBar } from "./chocolate-bar";
import { Table } from "./table";
import { Bag } from "./bag";

const chocolateBar = new ChocolateBar(
  "AFTR12",
  "Dark Chocolate 60%",
  "Lindt",
  13.7,
  "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/small_image/166x166/9df78eab33525d08d6e5fb8d27136e95/3/0/3046920010603_t1_1.png",
  94,
  0.2
);
const giftBox = new Bag(
  "AFTR12",
  "Dark Chocolate 60%",
  "Lindt",
  13.7,
  "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/small_image/166x166/9df78eab33525d08d6e5fb8d27136e95/3/0/3046920010603_t1_1.png",
  94,
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
);
const productTableElem = document.getElementById("product-table");
const productTableBody = document.querySelector(".product-table-content");
const productTable = new Table(productTableElem);
// let row = Table.crateRow(chocolateBar);
// productTableBody.appendChild(row);
// row = Table.crateRow(chocolateBar);
// productTableBody.appendChild(row);

// productTableBody.

// document.getElementById("app").innerHTML = `
// <h1>Hello World!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.</br>
//   ${chocolateBar}

// </div>
// `;
