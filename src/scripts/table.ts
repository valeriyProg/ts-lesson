import { Bag } from "./bag";
import { Product } from "./product";

export class Table {
  private _tbody: HTMLElement;
  private _rowsCount: number = 0;

  constructor(private _table: HTMLElement) {
    this._tbody = this._table.querySelector("tbody");
  }

  crateRow(product: Product): void {
    // HIDE DEFAULT EMPTY ROW
    if (this._rowsCount === 0) {
      if (!this._tbody.children[0].classList.contains("hide")) {
        this._tbody.children[0].classList.add("hide");
      }
    }
    let row: HTMLElement;
    row = document.createElement("tr");
    row.classList.add("product-table-row");
    row.dataset.index = this._rowsCount.toString();

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
        let btn = e.target as HTMLElement;
        this.deleteRow(+btn.dataset.index, this._tbody);
        // console.log(0, this._tbody);
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
  deleteRow(index: number, context: HTMLElement): void {
    let currentRow = context.querySelector(`[data-index="${index}"]`);
    let currentRowIndex = [].indexOf.call(context.children, currentRow);
    context.removeChild(context.children[currentRowIndex]);
    this._rowsCount--;
    // SHOW DEFAULT EMPTY ROW
    if (this._rowsCount === 0) {
      this._tbody.children[0].classList.remove("hide");
    }
  }
}
