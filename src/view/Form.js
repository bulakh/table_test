import Abstract from "./Abstract";

//Компонент формы
//Используем данные юзера и массив хедеров таблицы, чтобы не рисовать лишние поля в форме.

const createFormTemplate = (user, headers) => {

  //Блок about отличается, создаем отдельное условие.
  //Лэйбл делаем с заглавной буквы.
  //firstName и lastName в отдельном объекте name, ставим логическое ИЛИ.
  const formItems = headers.map(header => {
    return `<li class="table-form__item">
      <label class="table-form__label" for="${header}">${header[0].toUpperCase() + header.slice(1)}</label>
      ${header === 'about'
        ? `<textarea class="table-form__input table-form__input--textarea" type="text" name="about" id="about">${user.about}</textarea>`
        : `<input class="table-form__input" type="text" name="${header}" id="${header}" value="${user[header] || user.name[header]}">`
      }
    </li>`
  })

  return `<form class="table-form">
    <button class="button-close cross" type="button"></button>
    <ul class="table-form__list">
      ${formItems.join('')}
    </ul>
    <div class='table-form__buttons'>
      <button class="table__btn button-close" type="button">Cancel</button>
      <button class="table__btn button-submit" type="submit">Change</button>
    </div>
  </form>`
}

export default class Form extends Abstract {
  constructor(user, headers) {
    super();
    this._user = user;
    this._headers = headers;

    //Связываем внутренние методы класса.
    this._changeUserDataHandler = this._changeUserDataHandler.bind(this);
    this._closeClickFormHandler = this._closeClickFormHandler.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  getTemplate() {
    return createFormTemplate(this._user, this._headers);
  }

  //Берем данные из инпута введеного пользователем и меняем.
  _getUserData() {
    const currentUserProps = Array.from(this.getElement().querySelectorAll('.table-form__input')).map(input => [input.name, input.value]);

    const chagedUser = {
      name: {}
    };

    currentUserProps.map(prop => {
      const [name, value] = prop;

      if (/name/i.test(name)) {
        chagedUser.name[name] = value;
      } else {
        chagedUser[name] = value;
      }
    });

    return chagedUser;
  }

  _closeClickFormHandler(e) {
    e.preventDefault();
    this._callback.closeForm();
    this._removeEvents();

  }

  _escKeyDownHandler(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this._callback.closeForm();
      this._removeEvents();
    }
  }

  _changeUserDataHandler(e) {
    e.preventDefault();
    this._callback.changeUser(this._getUserData());

    this._removeEvents();
  }

  //Удаляем событие, чтобы не копились.
  _removeEvents() {
    document.removeEventListener('keydown', this._escKeyDownHandler);
    Array.from(this.getElement().querySelectorAll('.button-close')).map(btn => btn.removeEventListener('click', this._closeClickFormHandler));
  }

  //Вешаем события:
  setClickCancelHandler(callback) {
    this._callback.closeForm = callback;
    Array.from(this.getElement().querySelectorAll('.button-close')).map(btn => btn.addEventListener('click', this._closeClickFormHandler));
  }

  setEscCloseHandler(callback) {
    this._callback.closeForm = callback;
    document.addEventListener('keydown', this._escKeyDownHandler);
  }

  setSubmitChangeUserHandler(callback) {
    this._callback.changeUser = callback;
    this.getElement().querySelector('.button-submit').addEventListener('click', this._changeUserDataHandler);
  }

}
