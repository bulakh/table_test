import { tagType } from "../const";
import { createElement } from "../utils";
import Abstract from "./Abstract";

const createFormTemplate = () => {
  // const {name, about, eyeColor} = user;
  // const {firstName, lastName} = name;

  return `<form class="table-form">
    <button class="button-close" type="button">Close</button>
    <ul class="table-form__list">
      <li class="table-form__item">
        <label class="table-form__label" for="firstName">FirstName</label>
        <input class="table-form__input" type="text" name="firstName" id="firstName" value="Oleg">
      </li>
      <li class="table-form__item">
        <label class="table-form__label" for="lastName">LastName</label>
        <input class="table-form__input" type="text" name="lastName" id="lastName" value="Petrov">
      </li>
      <li class="table-form__item">
        <label class="table-form__label" for="about">About</label>
        <textarea class="table-form__input table-form__input--textarea" name="about" id="about">Qui aliquip esse occaecat voluptate cillum laborum do adipisicing ea. Lorem dolor pariatur exercitation et Lorem voluptate reprehenderit. Culpa nisi sunt laborum culpa eu et nulla aute aliqua commodo cupidatat culpa. Eu laboris dolor enim officia mollit labore proident proident tempor ex minim magna dolor. Ipsum cillum officia irure amet enim voluptate consequat deserunt laborum nulla excepteur pariatur voluptate incididunt. In excepteur adipisicing dolor ea occaecat elit. Irure dolor quis cillum minim voluptate.
        </textarea>
      </li>
      <li class="table-form__item">
        <label class="table-form__label" for="eyeColor">EyeColor</label>
        <input class="table-form__input" type="text" name="eyeColor" id="eyeColor" value="red">
      </li>
    </ul>
    <button class="button-close" type="button">Cancel</button>
    <button type="submit">Change</button>
  </form>`
}

export default class Form extends Abstract {
  constructor() {
    super();
    // this._user = user;
    this._element = null;

    this._closeClickFormHandler = this._closeClickFormHandler.bind(this);
  }

  getTemplate() {
    return createFormTemplate();
  }

  _closeClickFormHandler(e) {
    e.preventDefault();
    this._callback.closeForm();
  }

  setClickCancelHandler(callback) {
    this._callback.closeForm = callback;
    Array.from(this.getElement().querySelectorAll('.button-close')).map(btn => btn.addEventListener('click', this._closeClickFormHandler));
  }

}
