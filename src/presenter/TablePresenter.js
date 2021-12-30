import { render, RenderPosition } from '../utils';
import User from '../view/User';

class TablePresenter {
  constructor(element, model) {
    this._element = element;
    this._model = model;

    this._allUsers = this._model.getUsers();

    this.clearUsers = this.clearUsers.bind(this);
    this.setCountSymbols = this.setCountSymbols.bind(this);
    this.sort = this.sort.bind(this);
  }

  init() {
    this.render();
    this.setCountSymbols();
  }

  render() {
    this._element.innerHTML = '';

    this._allUsers.map(user => {
      render(this._element, new User(user, this._model.getCountSymbols()).getElement(), RenderPosition.BEFOREEND);
    })
  }

  clearUsers() {
    this._model.clear();
    this.render();
  }

  setCountSymbols() {
    const blockAbout = document.querySelector('.block-about');
    this._model.setCountSymbols(blockAbout);
    this.render();
  }

  sort(evt) {
    this._allUsers = this._model.getSortedUsers(evt.target.value);
    this.render();
  }
}

export default TablePresenter;
