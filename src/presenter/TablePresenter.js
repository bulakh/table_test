import { COUNT_USERS_ON_PAGE } from '../const';
import { divideUsers } from '../utils/divideUsers';
import { remove, render, RenderPosition } from '../utils/render';
import Form from '../view/Form';
// import Sort from '../view/Sort';
import UserList from '../view/UserList';

class TablePresenter {
  constructor(tableContainer, tableWrapContainer, model) {
    this._tableContainer = tableContainer;
    this._tableWrapContainer = tableWrapContainer;

    this._model = model;
    this._users = this._model.getUsersOnPage();

    this._userList = new UserList(this._users, this._countSymbols);
    this._formComponent = null;

    this._user = null;
    this._countSymbols = null;

    this.setCountSymbols = this.setCountSymbols.bind(this);

    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
    this._changeUser = this._changeUser.bind(this);
  }

  init() {
    this.renderUsers();
    this.setCountSymbols();
  }

  renderUsers() {
    remove(this._userList);

    this._users = this._model.getUsersOnPage();

    this._userList = new UserList(this._users, this._countSymbols);

    render(this._tableContainer, this._userList, RenderPosition.BEFOREEND);

    this._userList.setClickOpenFormHandler(this._renderForm);
  }

  _renderForm(e) {
    if (this._formComponent !== null) {
      this._removeForm();
    }

    this._model.setUser(e);
    this._user = this._model.getUser();

    this._formComponent = new Form(this._user);

    render(this._tableWrapContainer, this._formComponent, RenderPosition.BEFOREEND);

    this._formComponent.setSubmitChangeUserHandler(this._changeUser);
    this._formComponent.setClickCancelHandler(this._removeForm);
    this._formComponent.setEscCloseHandler(this._removeForm);
  }

  _changeUser(userData) {
    this._model.changeUsers(userData);
    this.renderUsers();
    this._removeForm();
  }

  _removeForm() {
    remove(this._formComponent);
  }

  setCountSymbols() {
    const blockAbout = document.querySelector('.block-about');
    this._model.setCountSymbols(blockAbout);
    this._countSymbols = this._model.getCountSymbols();
    this.renderUsers();
  }
}

export default TablePresenter;
