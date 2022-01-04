import { remove, render, RenderPosition } from '../utils';
import Form from '../view/Form';
import User from '../view/User';

class TablePresenter {
  constructor(tableList, tableWrap, model) {
    this._elementList = tableList;
    this._elementWrap = tableWrap;
    // this._elementAbout = blockAbout;

    this._model = model;
    this._formComponent = new Form();
    this._user = new User();

    this._allUsers = this._model.getUsers();

    // this.clearUsers = this.clearUsers.bind(this);
    this.setCountSymbols = this.setCountSymbols.bind(this);
    this.sort = this.sort.bind(this);

    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
  }

  init() {

    this.render();
    this.setCountSymbols();
    // this._renderForm();

    this._user.setClickOpenFormHandler(this._renderForm);
    this._formComponent.setClickCancelHandler(this._removeForm);
  }

  render() {
    this._elementList.innerHTML = '';

    this._allUsers.map(user => {
      render(this._elementList, new User(user, this._model.getCountSymbols()), RenderPosition.BEFOREEND);
    })
  }

  // clearUsers() {
  //   this._allUsers = this._model.clear();
  //   this.render();
  // }

  setCountSymbols() {
    const blockAbout = document.querySelector('.block-about');
    this._model.setCountSymbols(blockAbout);
    this.render();
  }

  sort(e) {
    this._allUsers = this._model.getSortedUsers(e.target.value);
    this.render();
  }

  _renderForm() {
    render(this._elementWrap, this._formComponent, RenderPosition.BEFOREEND);
  }

  _removeForm() {
    remove(this._formComponent);
  }
}

export default TablePresenter;
