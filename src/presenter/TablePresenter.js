import { remove, render, RenderPosition } from '../utils';
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
    // this._elementList = tableList;
    this._elementWrap = tableWrap;
    this._tableSort = tableSort;
    // this._elementAbout = blockAbout;

    this._model = model;
    this._allUsers = this._model.getUsers();
    this._formComponent = new Form();
    this._userList = new UserList(this._allUsers, this._countSymbols);
    this._sortComponent = new Sort();

    this._countSymbols = null;

    this.setCountSymbols = this.setCountSymbols.bind(this);

    this._sortUsers = this._sortUsers.bind(this);
    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
  }

  init() {
    this.render();
    this.setCountSymbols();
    // this._renderForm();
    this._renderSort();
  }

  render() {
    remove(this._userList);

    this._userList = new UserList(this._allUsers, this._countSymbols);

    render(this._elementTable, this._userList, RenderPosition.BEFOREEND);

    this._userList.setClickOpenFormHandler(this._renderForm);
  }

  setCountSymbols() {
    const blockAbout = document.querySelector('.block-about');
    this._model.setCountSymbols(blockAbout);
    this._countSymbols = this._model.getCountSymbols()
    this.render();
  }

  _renderSort() {
    render(this._tableSort, this._sortComponent, RenderPosition.BEFOREEND);

    this._sortComponent.setChangeSortHandler(this._sortUsers);
  }

  _sortUsers(e) {
    this._allUsers = this._model.getSortedUsers(e.target.value);

    this.render();
  }

  _renderForm() {
    render(this._elementWrap, this._formComponent, RenderPosition.BEFOREEND);

    this._formComponent.setClickCancelHandler(this._removeForm);
  }

  _removeForm() {
    remove(this._formComponent);
  }
}

export default TablePresenter;
