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
  0.2
);
const productTable = document.getElementById("product-table");
const productTableBody = document.querySelector(".product-table-content");
const row = Table.crateRow(chocolateBar);
productTableBody.appendChild(row);
const row = Table.crateRow(chocolateBar);
productTableBody.appendChild(row);

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
