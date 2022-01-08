import { COUNT_USERS_ON_PAGE } from "../const";
import { getPageCount } from "../utils/divideUsers";
import { remove, render, RenderPosition } from "../utils/render";
import Pagination from "../view/Pagination";
import Sort from '../view/Sort';


class NavigationPresenter {
  constructor(tableWrapContainer, tableSort, model, tablePresenter) {
    this._tableSort = tableSort;
    this._tableWrapContainer = tableWrapContainer;

    this._model = model;
    this._tablePresenter = tablePresenter;

    this._users = this._model.getUsers();
    this._pageNumber = 0;

    this._sortComponent = new Sort();
    this._paginationComponent = new Pagination(getPageCount(this._users, COUNT_USERS_ON_PAGE), this._pageNumber);

    this._changePageNumber = this._changePageNumber.bind(this);
    this._sortUsers = this._sortUsers.bind(this);
  }

  init() {
    this._renderSort();
    this._renderPagination();
  }

  _renderSort() {
    remove(this._sortComponent);

    render(this._tableSort, this._sortComponent, RenderPosition.BEFOREEND);

    this._sortComponent.setChangeSortHandler(this._sortUsers);
  }

  _sortUsers(e) {
    this._model.setSortedUsers(e.target.value);

    this._tablePresenter.renderTable();
  }

  _renderPagination() {
    if (this._paginationComponent !== null) {
      remove(this._paginationComponent);
    }

    this._paginationComponent = new Pagination(getPageCount(this._users, COUNT_USERS_ON_PAGE), this._pageNumber);

    render(this._tableWrapContainer, this._paginationComponent, RenderPosition.BEFOREEND);

    this._paginationComponent.setClickChangePageNumber(this._changePageNumber);
  }

  _changePageNumber(e) {

    this._model.setPageNumber(e.target.value);
    this._pageNumber = this._model.getPageNumber();

    this._tablePresenter.renderTable();
    this._renderSort();
    this._renderPagination();
  }


}

export default NavigationPresenter;
