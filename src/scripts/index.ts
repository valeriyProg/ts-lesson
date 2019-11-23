import { Table } from "./table";
import { ProductList } from "./productsList";

let productList = new ProductList();

const productTableElem = document.getElementById("product-table");
const productTable = new Table(productTableElem);

// FILL TABLE
productList.list.forEach(item => {
  productTable.crateRow(item);
});

let updateBtn = document.querySelector(".update-btn");
updateBtn.addEventListener(
  "click",
  () => {
    productList.list.forEach(item => {
      productTable.crateRow(item);
    });
  },
  false
);
