import Abstract from "./Abstract";

const createButtonsAddTemplate = (headers) => {
  const buttonItems = headers.map(header => `<li><button type="button" name='${header}' class='nav__btn'>Add ${header}</button></li>`)

  return `<ul class='nav__list'>
    ${buttonItems.join('')}
  </ul>`
}

export default class ButtonsAdd extends Abstract {
  constructor(headers) {
    super();
    this._headers = headers;

    this._addColumnHandler = this._addColumnHandler.bind(this);
  }

  getTemplate() {
    return createButtonsAddTemplate(this._headers);
  }

  _addColumnHandler(e) {
    e.preventDefault();
    this._callback.addColumn(e.target.name);
  }

  setClickAddColumnHandler(callback) {
    this._callback.addColumn = callback;
    Array.from(this.getElement().querySelectorAll('.nav__btn')).map(btn => btn.addEventListener('click', this._addColumnHandler));
  }
}
