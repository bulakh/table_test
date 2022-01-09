import Abstract from "./Abstract";

//Компонент отрисовки отдельного юзера,
//Ячейки about и eyeColor отличаются, поэтому создаем отдельные условия.

const createUserTemplate = (user, count, headers) => {

  //Делаем декомпозицию для лучшей читабельности.
  const {id, name, about, eyeColor} = user;

  const tableData = headers.map(header => {
    if (header === 'about') {
      return `<td class='block-about' data-name='about'>${about.slice(0, count)}...</td>`
    }

    if (header === 'eyeColor') {
      //Я выбрал такой вариант отображения цветов, хотя инлайново менять стили не совсем правильно.
      return `<td style='color: ${eyeColor}; background:${eyeColor}' data-name='${header}'>${eyeColor}</td>`
    }

    return `<td data-name='${header}'>${user[header] || name[header]}</td>`
  });

  return `<tr class="table__row" data-id="${id}">
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
