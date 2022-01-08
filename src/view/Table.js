import Abstract from "./Abstract";
import User from "./User";

const createTableTemplate = (users, count) => {

  const tableRows = users.map(user => new User(user, count).getElement().innerHTML);

  return `<table class="table">
    <thead>
      <tr>
        <td>firstName</td>
        <td>lastName</td>
        <td>about</td>
        <td>eyeColor</td>
      </tr>
    </thead>
    <tbody class="table-list">${tableRows.join('')}</tbody>
  </table>`
}

export default class Table extends Abstract {
  constructor(users, count) {
    super();
    this._users = users;
    this._count = count;

    this._showFormHandler = this._showFormHandler.bind(this);
  }

  getTemplate() {
    return createTableTemplate(this._users, this._count);
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
