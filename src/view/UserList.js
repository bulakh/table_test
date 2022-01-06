import Abstract from "./Abstract";
import User from "./User";

const createUserListTemplate = (users, count) => {

  const tableRows = users.map(user => new User(user, count).getElement().innerHTML);
  return `<tbody class="table-list">${tableRows}</tbody>`;
}

export default class UserList extends Abstract {
  constructor(users, count) {
    super();
    this._users = users;
    this._count = count;

    this._showFormHandler = this._showFormHandler.bind(this);
  }

  getTemplate() {
    return createUserListTemplate(this._users, this._count);
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
