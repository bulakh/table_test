import Abstract from "./Abstract";

//Компонент отрисовки сортировки
//Все как и в других компонентах.

const createSortTemplate = (headers) => {
  const options = headers.map(header => `<option value="${header}">${header}</option>`)

  return `<div class="select-wrap">
  Sort by
  <select name="sort" class="sort">
    <option value="default">default</option>
    ${options.join('')}
  </select>
  </div>`
}

export default class Sort extends Abstract {
  constructor(headers) {
    super();
    this._headers = headers;

    this._changeSortHandler = this._changeSortHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate(this._headers);
  }

  _changeSortHandler(e) {
    e.preventDefault();
    this._callback.changeSort(e);
  }

  setChangeSortHandler(callback) {
    this._callback.changeSort = callback;
    this.getElement().addEventListener('change', this._changeSortHandler);
  }
}
