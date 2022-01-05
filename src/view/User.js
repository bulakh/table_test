import Abstract from "./Abstract";

const createUserTemplate = (user, count) => {
  const {name, about, eyeColor} = user;
  const {firstName, lastName} = name;

  return `<tr class="table__row">
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td class="block-about">
      ${about.slice(0, count) + '...'}
    </td>
    <td>${eyeColor}</td>
  </tr>`
}

export default class User extends Abstract {
  constructor(user, count) {
    super();
    this._user = user;
    this._count = count;

    // this._showFormHandler = this._showFormHandler.bind(this);
  }

  getTemplate() {
    return createUserTemplate(this._user, this._count);
  }

  // _showFormHandler(e) {
  //   e.preventDefault();
  //   this._callback.closeForm();
  // }

  // setClickOpenFormHandler(callback) {
  //   this._callback.closeForm = callback;
  //   Array.from(this.getElement().querySelectorAll('.table__row')).map(row => row.addEventListener('click', this._showFormHandler));
  // }
}
