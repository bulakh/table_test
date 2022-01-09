import { remove, render, RenderPosition } from '../utils/render';
import ButtonsAddView from '../view/ButtonsAdd';
import Form from '../view/Form';
import Table from '../view/Table';

//Презентер Таблица отвечает за логику отрисовки компонентов Таблицы, Формы и Кнопок добавления колон.

class TablePresenter {
  constructor(tableWrapContainer, tableWrapMainContainer, tableNavContainer, model) {
    this._tableWrapContainer = tableWrapContainer;
    this._tableWrapMainContainer = tableWrapMainContainer;
    this._tableNavContainer = tableNavContainer;
    this._model = model;

    //Из модели берем данные.
    this._users = this._model.getUsersOnPage();
    this._tableHeaders = this._model.getTableHeaders();
    this._removedHeaders = this._model.getRemovedHeaders();

    //Объявлем компоненты отображения (view).
    this._buttonsAddComponent = new ButtonsAddView(this._removedHeaders);
    this._tableComponent = new Table(this._users, this._countSymbols, this._tableHeaders);
    this._formComponent = null;

    this._countSymbols = null;

    //Связываем методы, чтобы this не было потери контекста.
    this.setCountSymbols = this.setCountSymbols.bind(this);

    this._renderForm = this._renderForm.bind(this);
    this._removeForm = this._removeForm.bind(this);
    this._changeUser = this._changeUser.bind(this);
    this._removeAddColumn = this._removeAddColumn.bind(this);

    this._navigationPresenter;
  }

  //Методы в момент инициализации презентера
  //Параметр другой презентер из которого нам нужны методы.
  init(NavPresenter) {
    this._renderButtonsAdd();
    this.renderTable();
    this.setCountSymbols();

    this._navigationPresenter = NavPresenter;
  }

  //Метод отрисовки таблицы с данными юзера.
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

    const user = this._model.getUser();

    this._formComponent = new Form(user, this._tableHeaders);

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

  //Метод изменения данных в моделе
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

  //Метод удаления и добавления колонок
  _removeAddColumn(header) {
    this._model.setTableHeaders(header);

    this._tableHeaders = this._model.getTableHeaders();

    this._renderButtonsAdd();
    this.renderTable();
    this.setCountSymbols();
    this._navigationPresenter.renderSort();

  }

  //Метод изменяет кол-во символов, которое отрисуется в блоке about.
  setCountSymbols() {
    this._model.setCountSymbols();
    this._countSymbols = this._model.getCountSymbols();

    this.renderTable();
  }
}

export default TablePresenter;
