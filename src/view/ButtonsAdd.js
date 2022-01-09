import Abstract from "./Abstract";

// Компонент кнопок добавления колонок.
// Шаблон на вход принимает массив хедеров и по их кол-ву уже отрисовывает кнопки.

const createButtonsAddTemplate = (headers) => {
  const buttonItems = headers.map(header => `<li><button type="button" name='${header}' class='table__btn nav__btn'>Add ${header}</button></li>`)

  return `<ul class='nav__list'>
    ${buttonItems.join('')}
  </ul>`
}

export default class ButtonsAdd extends Abstract {
  constructor(headers) {
    //Super для переменных и методов родительского класса.
    super();
    this._headers = headers;

    //Связывание колбэка, чтобы this не терял контекст.

    this._addColumnHandler = this._addColumnHandler.bind(this);
  }

  getTemplate() {
    return createButtonsAddTemplate(this._headers);
  }

  //Внутренний метод
  _addColumnHandler(e) {
    e.preventDefault();
    this._callback.addColumn(e.target.name);
  }

  //Внешний метод
  setClickAddColumnHandler(callback) {
    this._callback.addColumn = callback;
    Array.from(this.getElement().querySelectorAll('.nav__btn')).map(btn => btn.addEventListener('click', this._addColumnHandler));
  }
}
