import Abstract from "./Abstract";

const createUserTemplate = (user, count) => {
  const {id, name, about, eyeColor} = user;
  const {firstName, lastName} = name;

  return `<tr class="table__row" data-id="${id}">
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td class="block-about">
      ${about.slice(0, count) + '...'}
    </td>
    <td>${eyeColor}</td>
  </tr>`
}

// style='color: ${eyeColor}; background:${eyeColor}'

export default class User extends Abstract {
  constructor(user, count) {
    super();
    this._user = user;
    this._count = count;
  }

  getTemplate() {
    return createUserTemplate(this._user, this._count);
  }
}
