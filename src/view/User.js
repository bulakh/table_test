import Abstract from "./Abstract";

const createUserTemplate = (user, count, headers) => {
  // const {id, name, about, eyeColor} = user;
  // const {firstName, lastName} = name;

  const tableData = headers.map(header => `<td data-name='${header}'>${user[header] || user.name[header]}</td>`);

  return `<tr class="table__row" data-id="${user.id}">
    ${tableData.join('')}
  </tr>`
}

// style='color: ${eyeColor}; background:${eyeColor}'

export default class User extends Abstract {
  constructor(user, count, headers) {
    super();
    this._user = user;
    this._count = count;
    this._headers = headers;
  }

  getTemplate() {
    return createUserTemplate(this._user, this._count, this._headers);
  }
}
