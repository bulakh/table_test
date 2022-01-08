import Abstract from "./Abstract";
import User from "./User";

const createTableTemplate = (users, count, headers) => {
  const tableRows = users.map(user => new User(user, count, headers).getElement().innerHTML);
  const tableHeaders = headers.map(header => `<td>${header}</td>`);

  return `<table class="table">
    <thead>
      <tr>
        ${tableHeaders.join('')}
      </tr>
    </thead>
    <tbody class="table-list">${tableRows.join('')}</tbody>
  </table>`
}

export default class Table extends Abstract {
  constructor(users, count, headers) {
    super();
    this._users = users;
    this._count = count;
    this._headers = headers;

    this._showFormHandler = this._showFormHandler.bind(this);
  }

  getTemplate() {
    return createTableTemplate(this._users, this._count, this._headers);
  }

  _showFormHandler(e) {
    e.preventDefault();
    this._callback.openForm(e);
  }

  setClickOpenFormHandler(callback) {
    this._callback.openForm = callback;
    Array.from(this.getElement().querySelectorAll('.table__row')).map(row => row.addEventListener('click', this._showFormHandler));
  }
}
