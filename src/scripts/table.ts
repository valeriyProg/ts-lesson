import { ChocolateBar } from "./chocolate-bar";

export class Table {
  private _tbody: HTMLElement;
  constructor(private _table: HTMLElement) {
    this._tbody = this._table.querySelector("tbody");
  }

  crateRow(product: ChocolateBar): void {
    let row: HTMLElement;
    row = document.createElement("tr");
    row.classList.add("product-table-row", "row");

    let imgCol = document.createElement("td");
    imgCol.classList.add("col", "img-col");
    let img = document.createElement("img");
    img.src = product.img;
    imgCol.appendChild(img);

    let nameCol = document.createElement("td");
    nameCol.classList.add("col", "name-col");
    let name = document.createElement("span");
    name.innerText = product.brand + " " + product.name;
    nameCol.appendChild(name);

    let priceCol = document.createElement("td");
    priceCol.classList.add("col", "price-col");
    let price = document.createElement("span");
    price.innerText = "&pound; " + product.price;
    priceCol.appendChild(price);

    let deleteCol = document.createElement("td");
    deleteCol.classList.add("col", "delete-col");
    let button = document.createElement("button");
    button.classList.add("delete-btn");
    button.addEventListener(
      "click",
      () => {
        this.deleteRow(1, deleteCol);
      },
      false
    );
    deleteCol.appendChild(button);

    row.appendChild(imgCol);
    row.appendChild(nameCol);
    row.appendChild(priceCol);
    row.appendChild(deleteCol);

    this._table.appendChild(row);
  }
  deleteRow(index, table: HTMLElement): void {}
}

// <td class="col name-col">
// <span>Lindt Dark Chocolate 60%</span>
// </td>
// <td class="col price-col">
// <span>&pound;17.50</span>
// </td>
// <td class="col delete-col">
// <button class="delete-btn" id="delete-btn"></button>
// </td>
