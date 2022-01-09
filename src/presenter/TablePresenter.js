import { remove, render, RenderPosition } from '../utils/render';
import ButtonsAddView from '../view/ButtonsAdd';
import Form from '../view/Form';
import Table from '../view/Table';

class TablePresenter {
  constructor(tableWrapContainer, tableWrapMainContainer, tableNavContainer, model) {
    this._tableWrapContainer = tableWrapContainer;
    this._tableWrapMainContainer = tableWrapMainContainer;
    this._tableNavContainer = tableNavContainer;
    this._model = model;

    this._users = this._model.getUsersOnPage();
    this._tableHeaders = this._model.getTableHeaders();
    this._removedHeaders = this._model.getRemovedHeaders();

    this._buttonsAddComponent = new ButtonsAddView(this._removedHeaders);
    this._tableComponent = new Table(this._users, this._countSymbols, this._tableHeaders);
    this._formComponent = null;

    this._user = null;
    this._countSymbols = null;

    this.setCountSymbols = this.setCountSymbols.bind(this);

    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
    this._changeUser = this._changeUser.bind(this);
    this._removeAddColumn = this._removeAddColumn.bind(this);

    this._blockAbout = null;
    this._navigationPresenter;
  }

  init(NavPresenter) {
    this._renderButtonsAdd();
    this.renderTable();
    this.setCountSymbols();

    this._navigationPresenter = NavPresenter;
  }

  renderTable() {
    remove(this._tableComponent);

    this._users = this._model.getUsersOnPage();
    this._tableComponent = new Table(this._users, this._countSymbols, this._tableHeaders);

    render(this._tableWrapMainContainer, this._tableComponent, RenderPosition.BEFOREEND);

    this._removeForm();

    this._tableComponent.setClickOpenFormHandler(this._renderForm);
    this._tableComponent.setClickRemoveColumnHandler(this._removeAddColumn);
  }

  _renderForm(e) {
    this._removeForm();


    this._model.setUser(e);
    this._user = this._model.getUser();

    this._formComponent = new Form(this._user, this._tableHeaders);

    render(this._tableWrapContainer, this._formComponent, RenderPosition.BEFOREEND);

    this._formComponent.setSubmitChangeUserHandler(this._changeUser);
    this._formComponent.setClickCancelHandler(this._removeForm);
    this._formComponent.setEscCloseHandler(this._removeForm);
  }

  _renderButtonsAdd() {
    remove(this._buttonsAddComponent);

    this._buttonsAddComponent = new ButtonsAddView(this._removedHeaders);

    render(this._tableNavContainer, this._buttonsAddComponent, RenderPosition.BEFOREEND);

    this._buttonsAddComponent.setClickAddColumnHandler(this._removeAddColumn);
  }

  _changeUser(userData) {
    this._model.changeUsers(userData);
    this.renderTable();
    this.setCountSymbols();
    this._removeForm();
    this._navigationPresenter.renderSort();
  }

  _removeForm() {
    if (this._formComponent !== null) {
      remove(this._formComponent);
    }
  }

  _removeAddColumn(header) {
    this._model.setTableHeaders(header);

    this._tableHeaders = this._model.getTableHeaders();

    this._renderButtonsAdd();
    this.renderTable();
    this.setCountSymbols();
    this._navigationPresenter.renderSort();

  }

  setCountSymbols() {
    this._model.setCountSymbols();
    this._countSymbols = this._model.getCountSymbols();

    this.renderTable();
  }
}

export default TablePresenter;
