import { createElement } from "../utils";

const createUserTemplate = (user, count) => {
  const {name, about, eyeColor} = user;
  const {firstName, lastName} = name;

  return `<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td class="block-about">
      ${about.slice(0, count) + '...'}
    </td>
    <td>${eyeColor}</td>
  </tr>`
}

export default class User {
  constructor(user, count) {
    this._user = user;
    this._count = count;
    this._element = null;
  }

  getTemplate() {
    return createUserTemplate(this._user, this._count);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
