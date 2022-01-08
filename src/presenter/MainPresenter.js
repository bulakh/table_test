import NavigationPresenter from './NavigationPresenter';
import TablePresenter from "./TablePresenter";

class MainPresenter {
  constructor(tableWrapContainer, tableWrapMainContainer, tableNavContainer, model) {
    this._tableWrapContainer = tableWrapContainer;
    this._tableWrapMainContainer = tableWrapMainContainer;
    this._tableNavContainer = tableNavContainer;
    this._model = model;

    this._tablePresenter = new TablePresenter(this._tableWrapContainer, this._tableWrapMainContainer, this._tableNavContainer, this._model);
    this._navigationPresenter = new NavigationPresenter(this._tableWrapContainer, this._tableWrapMainContainer, this._tableNavContainer, this._model);
  }

  init() {
    this._tablePresenter.init(this._navigationPresenter);
    this._navigationPresenter.init(this._tablePresenter);
  }
}

export default MainPresenter;
