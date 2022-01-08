import Abstract from "./Abstract";

const createFormTemplate = (user, headers) => {
  const formItems = headers.map(header => {
    return `<li class="table-form__item">
      <label class="table-form__label" for="${header}">${header[0].toUpperCase() + header.slice(1)}</label>
      ${header === 'about'
        ? `<textarea class="table-form__input block-about" type="text" name="about" id="about">${user.about}</textarea>`
        : `<input class="table-form__input" type="text" name="${header}" id="${header}" value="${user[header] || user.name[header]}">`
      }
    </li>`
  })

  return `<form class="table-form">
    <button class="button-close" type="button">Close</button>
    <ul class="table-form__list">
      ${formItems.join('')}
    </ul>
    <button class="button-close" type="button">Cancel</button>
    <button class="button-submit" type="submit">Change</button>
  </form>`
}

export default class Form extends Abstract {
  constructor(user, headers) {
    super();
    this._user = user;
    this._headers = headers;

    this._changeUserDataHandler = this._changeUserDataHandler.bind(this);
    this._closeClickFormHandler = this._closeClickFormHandler.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  getTemplate() {
    return createFormTemplate(this._user, this._headers);
  }

  _getUserData() {
    const currentUserProps = Array.from(this.getElement().querySelectorAll('.table-form__input')).map(input => [input.name, input.value]);

    const chagedUser = {
      name: {}
    };

    currentUserProps.map(prop => {
      if (/name/i.test(prop[0])) {
        chagedUser.name[prop[0]] = prop[1];
      } else {
        chagedUser[prop[0]] = prop[1];
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

  _removeEvents() {
    document.removeEventListener('keydown', this._escKeyDownHandler);
    Array.from(this.getElement().querySelectorAll('.button-close')).map(btn => btn.removeEventListener('click', this._closeClickFormHandler));
  }

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
