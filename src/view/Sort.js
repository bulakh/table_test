import Abstract from "./Abstract";

const createSortTemplate = () => {

  return `<select name="sort" class="sort">
    <option value="default">default</option>
    <option value="firstName">firstName</option>
    <option value="lastName">lastName</option>
    <option value="about">about</option>
    <option value="eyeColor">eyeColor</option>
  </select>`
}

export default class Sort extends Abstract {
  constructor() {
    super();
    // this._user = user;
    // this._count = count;

    this._changeSortHandler = this._changeSortHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
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
