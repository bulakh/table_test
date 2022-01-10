import { COUNT_USERS_ON_PAGE } from "../const";
import { getPageCount } from "../utils/divideUsers";
import { remove, render, RenderPosition } from "../utils/render";
import Pagination from "../view/Pagination";
import Sort from '../view/Sort';

//Презентер Навигация отвечает за логику отрисовки компонентов пагинации и сортировки.

class NavigationPresenter {
  constructor(tableWrapContainer, tableWrapMainContainer, tableNavContainer, model) {
    this._tableWrapContainer = tableWrapContainer;
    this._tableWrapMainContainer = tableWrapMainContainer;
    this._tableNavContainer = tableNavContainer;
    this._model = model;

    //Из модели берем данные.
    this._users = this._model.getUsers();
    this._tableHeaders = this._model.getTableHeaders();
    this._pageNumber = 0;

    //Объявлем компоненты отображения (view).
    this._sortComponent = new Sort(this._tableHeaders);
    this._paginationComponent = new Pagination(getPageCount(this._users, COUNT_USERS_ON_PAGE), this._pageNumber);

    this._changePageNumber = this._changePageNumber.bind(this);
    this._sortUsers = this._sortUsers.bind(this);

    this._tablePresenter;
  }

  //Методы в момент инициализации презентера
  //Параметр - другой презентер из которого нам нужны методы.
  init(tablePresenter) {
    this.renderSort();
    this._renderPagination();

    this._tablePresenter = tablePresenter;
  }

  renderSort() {
    // Сначала удаляем компонент, чтобы добавить с новыми данными.
    remove(this._sortComponent);

    this._sortComponent = new Sort(this._tableHeaders);

    render(this._tableNavContainer, this._sortComponent, RenderPosition.AFTERBEGIN);

    this._sortComponent.setChangeSortHandler(this._sortUsers);
  }

  _sortUsers(e) {
    //По событию клика, определяем значание компонента.
    this._model.setSortedUsers(e.target.value);

    this._tablePresenter.renderTable();
  }

  _renderPagination() {
    //Проверка на компонент
    if (this._paginationComponent !== null) {
      remove(this._paginationComponent);
    }

    //Меняем значение компонента с новыми данными.
    this._paginationComponent = new Pagination(getPageCount(this._users, COUNT_USERS_ON_PAGE), this._pageNumber);

    render(this._tableWrapContainer, this._paginationComponent, RenderPosition.BEFOREEND);

    this._paginationComponent.setClickChangePageNumber(this._changePageNumber);
  }

  _changePageNumber(e) {
    this._model.setPageNumber(e.target.value);
    this._pageNumber = this._model.getPageNumber();

    this._tablePresenter.renderTable();
    this.renderSort();
    this._renderPagination();
  }


}

export default NavigationPresenter;
