import Abstract from "./Abstract";

const createFormTemplate = (user) => {
  const {name, about, eyeColor} = user;
  const {firstName, lastName} = name;

  return `<form class="table-form">
    <button class="button-close" type="button">Close</button>
    <ul class="table-form__list">
      <li class="table-form__item">
        <label class="table-form__label" for="firstName">FirstName</label>
        <input class="table-form__input" type="text" name="firstName" id="firstName" value="${firstName}">
      </li>
      <li class="table-form__item">
        <label class="table-form__label" for="lastName">LastName</label>
        <input class="table-form__input" type="text" name="lastName" id="lastName" value="${lastName}">
      </li>
      <li class="table-form__item">
        <label class="table-form__label" for="about">About</label>
        <textarea class="table-form__input table-form__input--textarea" name="about" id="about">${about}</textarea>
      </li>
      <li class="table-form__item">
        <label class="table-form__label" for="eyeColor">EyeColor</label>
        <input class="table-form__input" type="text" name="eyeColor" id="eyeColor" value="${eyeColor}">
      </li>
    </ul>
    <button class="button-close" type="button">Cancel</button>
    <button class="button-submit" type="submit">Change</button>
  </form>`
}

export default class Form extends Abstract {
  constructor(user) {
    super();
    this._user = user;

    this._changeUserDataHandler = this._changeUserDataHandler.bind(this);
    this._closeClickFormHandler = this._closeClickFormHandler.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  getTemplate() {
    return createFormTemplate(this._user);
  }

  _getUserData() {
    const currentUser = Array.from(this.getElement().querySelectorAll('.table-form__input')).map(input => input.value);

    const [firstName, lastName, about, eyeColor] = currentUser;

    return {
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      about: about,
      eyeColor: eyeColor,
    };
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
