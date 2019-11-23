import { ChocolateBar } from "./chocolate-bar.ts";

const chocolateBar = new ChocolateBar(
  "AFTR12",
  "Dark Chocolate 60%",
  "Lindt",
  13.7,
  "https://www.lindt.co.uk/shop/media/catalog/product/cache/1/small_image/166x166/9df78eab33525d08d6e5fb8d27136e95/3/0/3046920010603_t1_1.png",
  94,
  0.2
);
const productTable: HTMLElement = document.getElementById("product-table");
const productTableBody: HTMLElement = document.querySelector(
  ".product-table-content"
);

productTableBody.

//  <tr class="product-table-row row">
//                   <td class="col img-col">
//                     <img
//                       src="https://www.lindt.co.uk/shop/media/catalog/product/cache/1/small_image/166x166/9df78eab33525d08d6e5fb8d27136e95/3/0/3046920010603_t1_1.png"
//                       alt=""
//                     />
//                   </td>
//                   <td class="col name-col">
//                     <span>Lindt Dark Chocolate 60%</span>
//                   </td>
//                   <td class="col price-col">
//                     <span>&pound;17.50</span>
//                   </td>
//                   <td class="col delete-col">
//                     <button class="delete-btn" id="delete-btn"></button>
//                   </td>
//                 </tr>

// document.getElementById("app").innerHTML = `
// <h1>Hello World!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.</br>
//   ${chocolateBar}

// </div>
// `;
