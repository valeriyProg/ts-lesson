import { ChocolateBar } from "./chocolate-bar";

export class Table {
  private _tbody: HTMLElement;
  private _rowsCount: number = 0;
  private _self = this;
  constructor(private _table: HTMLElement) {
    this._tbody = this._table.querySelector("tbody");
  }

  crateRow(product: ChocolateBar): void {
    let row: HTMLElement;
    row = document.createElement("tr");
    row.classList.add("product-table-row");

    let imgCol = document.createElement("td");
    imgCol.classList.add("img-col");
    let img = document.createElement("img");
    img.classList.add("bar");
    img.src = product.img;
    imgCol.appendChild(img);

    let nameCol = document.createElement("td");
    nameCol.classList.add("name-col");
    let name = document.createElement("span");
    name.innerText = product.brand + " " + product.name;
    nameCol.appendChild(name);

    let priceCol = document.createElement("td");
    priceCol.classList.add("price-col");
    let price = document.createElement("span");
    price.innerHTML = "&pound; " + product.price;
    priceCol.appendChild(price);

    let deleteCol = document.createElement("td");
    deleteCol.classList.add("delete-col");
    let button = document.createElement("button");
    button.classList.add("delete-btn");
    button.id = "delete-btn";
    button.dataset.dataPos = this._rowsCount.toString();
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

// <td class="col name-col">
// <span>Lindt Dark Chocolate 60%</span>
// </td>
// <td class="col price-col">
// <span>&pound;17.50</span>
// </td>
// <td class="col delete-col">
// <button class="delete-btn" id="delete-btn"></button>
// </td>
