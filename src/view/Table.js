import Abstract from "./Abstract";
import User from "./User";

//Компонент отображения таблицы.
//Тут подключаем компонент отдельного юзера.
//Принимает всех юзеров, кол-во символов в блоке About (чтобы было 2 строки) и заголовки.

const createTableTemplate = (users, count, headers) => {
  const tableHeaders = headers.map(header => `<td class='table__header' title='Remove column'>${header}</td>`);
  const tableRows = users.map(user => new User(user, count, headers).getElement().innerHTML);

  return `<table class="table">
    <thead>
      <tr>
        ${tableHeaders.join('')}
      </tr>
    </thead>
    <tbody class="table__list">${tableRows.join('')}</tbody>
  </table>`
}

export default class Table extends Abstract {
  constructor(users, countSymbolsAbout, headers) {
    super();
    this._users = users;
    this._count = countSymbolsAbout;
    this._headers = headers;

    this._showFormHandler = this._showFormHandler.bind(this);
    this._removeColumnHandler = this._removeColumnHandler.bind(this);
  }

  getTemplate() {
    return createTableTemplate(this._users, this._count, this._headers);
  }

  _showFormHandler(e) {
    e.preventDefault();
    this._callback.openForm(e);
  }

  //Метод по клику на заголовок удаляет колонку.
  _removeColumnHandler(e) {
    e.preventDefault();
    this._callback.removeColumn(e.target.innerText);
  }

  setClickOpenFormHandler(callback) {
    this._callback.openForm = callback;
    Array.from(this.getElement().querySelectorAll('.table__row')).map(row => row.addEventListener('click', this._showFormHandler));
  }

  setClickRemoveColumnHandler(callback) {
    this._callback.removeColumn = callback;
    Array.from(this.getElement().querySelectorAll('.table__header')).map(header => header.addEventListener('click', this._removeColumnHandler));
  }
}
