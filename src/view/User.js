import Abstract from "./Abstract";

const createUserTemplate = (user, count, headers) => {
  const tableData = headers.map(header => {
    if (header === 'about') {
      return `<td class='block-about' data-name='about'>${user.about.slice(0, count)}...</td>`
    }

    if (header === 'eyeColor') {
      return `<td style='color: ${user.eyeColor}; background:${user.eyeColor}' data-name='${header}'>${user.eyeColor}</td>`
    }

    return `<td data-name='${header}'>${user[header] || user.name[header]}</td>`
  });

  return `<tr class="table__row" data-id="${user.id}">
    ${tableData.join('')}
  </tr>`
}

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
