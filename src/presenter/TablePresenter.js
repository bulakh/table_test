import { remove, render, RenderPosition } from '../utils/render';
import Form from '../view/Form';
import Table from '../view/Table';

class TablePresenter {
  constructor(tableWrapMainContainer, tableWrapContainer, model) {
    // this._table = table;
    this._tableWrapMainContainer = tableWrapMainContainer;
    this._tableWrapContainer = tableWrapContainer;

    this._model = model;
    this._users = this._model.getUsersOnPage();

    this._TableComponent = new Table(this._users, this._countSymbols);
    this._formComponent = null;

    this._user = null;
    this._countSymbols = null;

    this.setCountSymbols = this.setCountSymbols.bind(this);

    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
    this._changeUser = this._changeUser.bind(this);
  }

  init() {
    this.renderTable();
    this.setCountSymbols();
  }

  renderTable() {
    remove(this._TableComponent);

    this._users = this._model.getUsersOnPage();

    this._TableComponent = new Table(this._users, this._countSymbols);

    render(this._tableWrapMainContainer, this._TableComponent, RenderPosition.BEFOREEND);

    this._TableComponent.setClickOpenFormHandler(this._renderForm);
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
    this.renderTable();
    this._removeForm();
  }

  _removeForm() {
    remove(this._formComponent);
  }

  setCountSymbols() {
    const blockAbout = document.querySelector('.block-about');
    this._model.setCountSymbols(blockAbout);
    this._countSymbols = this._model.getCountSymbols();
    this.renderTable();
  }
}

export default TablePresenter;
