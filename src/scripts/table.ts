import { ChocolateBar } from "./chocolate-bar";
import { Bag } from "./bag";

export class Table {
  private _tbody: HTMLElement;
  private _rowsCount: number = 0;

  constructor(private _table: HTMLElement) {
    this._tbody = this._table.querySelector("tbody");
  }

  crateRow(product: ChocolateBar): void {
    let row: HTMLElement;
    row = document.createElement("tr");
    row.classList.add("product-table-row");

    // IMG COL //
    let imgCol = document.createElement("td");
    imgCol.classList.add("img-col");
    let img = document.createElement("img");
    img.classList.add("bar");
    img.src = product.img;
    imgCol.appendChild(img);

    // NAME COL //
    let nameCol = document.createElement("td");
    nameCol.classList.add("name-col");
    let name = document.createElement("span");
    if (product instanceof Bag) {
      name.innerText =
        product.brand + " " + product.name + " " + product.weight + "g";
    } else {
      name.innerText = product.brand + " " + product.name;
    }
    nameCol.appendChild(name);

    // PRICE COL //
    let priceCol = document.createElement("td");
    priceCol.classList.add("price-col");
    let price = document.createElement("span");
    price.innerHTML = "&pound; " + product.price;
    priceCol.appendChild(price);

    // DELETE BUTTON COL //
    let deleteCol = document.createElement("td");
    deleteCol.classList.add("delete-col");
    let button = document.createElement("button");
    button.classList.add("delete-btn");
    button.id = "delete-btn";
    button.dataset.index = this._rowsCount.toString();
    button.addEventListener(
      "click",
      e => {
        // this.deleteRow(1, deleteCol);
        console.log(this);
      },
      false
    );
    deleteCol.appendChild(button);

    row.appendChild(imgCol);
    row.appendChild(nameCol);
    row.appendChild(priceCol);
    row.appendChild(deleteCol);

    // this._table.appendChild(row);
    this._tbody.appendChild(row);
    this._rowsCount++;
  }
  deleteRow(index, table: HTMLElement): void {}
}
