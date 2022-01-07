import { COUNT_USERS_ON_PAGE } from "../const";
import { getPageCount } from "../utils/divideUsers";
import { render, RenderPosition } from "../utils/render";
import Pagination from "../view/Pagination";


class NavigationPresenter {
  constructor(tableBody, model, tablePresenter) {
    this._body = tableBody;
    this._model = model;
    this._tablePresenter = tablePresenter;

    this._users = this._model.getUsers();

    this._paginationComponent = new Pagination(getPageCount(this._users, COUNT_USERS_ON_PAGE));

    this._changePageNumber = this._changePageNumber.bind(this);
  }

  init() {
    this._renderPagination();
  }

  _renderPagination() {
    render(this._body, this._paginationComponent, RenderPosition.BEFOREEND);

    this._paginationComponent.setClickChangePageNumber(this._changePageNumber);
  }

  _changePageNumber(e) {
    this._model.setPageNumber(e.target.value);

    this._tablePresenter.renderUsers();
  }


}

export default NavigationPresenter;
