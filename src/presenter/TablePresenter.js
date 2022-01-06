import { remove, render, RenderPosition } from '../utils/render';
import Form from '../view/Form';
import Sort from '../view/Sort';
import UserList from '../view/UserList';

class TablePresenter {
  constructor(
    table,
    tableWrap,
    tableSort,
    model
  ) {
    this._elementTable = table;
    this._elementWrap = tableWrap;
    this._tableSort = tableSort;

    this._model = model;
    this._allUsers = this._model.getUsers();
    this._userList = new UserList(this._allUsers, this._countSymbols);
    this._sortComponent = new Sort();
    this._formComponent = null;

    this._user = null;
    this._countSymbols = null;

    this.setCountSymbols = this.setCountSymbols.bind(this);

    this._sortUsers = this._sortUsers.bind(this);
    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
    this._changeUser = this._changeUser.bind(this);
  }

  init() {
    this._renderUsers();
    this.setCountSymbols();
    this._renderSort();
  }

  _renderUsers() {
    remove(this._userList);

    this._userList = new UserList(this._allUsers, this._countSymbols);

    render(this._elementTable, this._userList, RenderPosition.BEFOREEND);

    this._userList.setClickOpenFormHandler(this._renderForm);
  }

  setCountSymbols() {
    const blockAbout = document.querySelector('.block-about');
    this._model.setCountSymbols(blockAbout);
    this._countSymbols = this._model.getCountSymbols();
    this._renderUsers();
  }

  _renderSort() {
    render(this._tableSort, this._sortComponent, RenderPosition.BEFOREEND);

    this._sortComponent.setChangeSortHandler(this._sortUsers);
  }

  _sortUsers(e) {
    this._allUsers = this._model.getSortedUsers(e.target.value);

    this._renderUsers();
  }

  _renderForm(e) {
    if (this._formComponent !== null) {
      this._removeForm();
    }

    this._model.setUser(e);
    this._user = this._model.getUser();

    this._formComponent = new Form(this._user);

    render(this._elementWrap, this._formComponent, RenderPosition.BEFOREEND);

    this._formComponent.setSubmitChangeUserHandler(this._changeUser);
    this._formComponent.setClickCancelHandler(this._removeForm);
    this._formComponent.setEscCloseHandler(this._removeForm);
  }

  _changeUser(userData) {
    this._model.changeUsers(userData);
    this._allUsers = this._model.getUsers();
    this._renderUsers();
    this._removeForm();
  }

  _removeForm() {
    remove(this._formComponent);
  }
}

export default TablePresenter;
