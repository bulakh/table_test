import { render, RenderPosition } from '../utils';
import User from '../view/User';

class TablePresenter {
  constructor(element, model) {
    this._element = element;
    this._model = model;

    this.clearUsers = this.clearUsers.bind(this);
    this.getCount = this.getCount.bind(this);
  }

  render(count) {
    const allUsers = this._model.getUsers();
    this._element.innerHTML = '';

    allUsers.map(user => {
      render(this._element, new User(user, count).getElement(), RenderPosition.BEFOREEND);
    })
  }

  clearUsers() {
    this._model.clear();
    this.render();
  }

  getCount() {
    const blockAbout = document.querySelector('.block-about');

    this.render(this._model.getCount(blockAbout));
  }
}

export default TablePresenter;
