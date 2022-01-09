import NavigationPresenter from './NavigationPresenter';
import TablePresenter from "./TablePresenter";

// Презентер отвечает за логику взаимодействия данных и компонентов отображения(view).

//Главный презентер. Соединяем всех презентеров.
//На вход принимаем, элементы.

class MainPresenter {
  constructor(tableWrapContainer, tableWrapMainContainer, tableNavContainer, model) {
    this._tableWrapContainer = tableWrapContainer;
    this._tableWrapMainContainer = tableWrapMainContainer;
    this._tableNavContainer = tableNavContainer;
    this._model = model;

    this._tablePresenter = new TablePresenter(this._tableWrapContainer, this._tableWrapMainContainer, this._tableNavContainer, this._model);
    this._navigationPresenter = new NavigationPresenter(this._tableWrapContainer, this._tableWrapMainContainer, this._tableNavContainer, this._model);

    this.setCountSymbols = this.setCountSymbols.bind(this);
  }

  // Инициализируем презентеры.
  // Аргументами передаем, друг другу презентеры.
  init() {
    this._tablePresenter.init(this._navigationPresenter);
    this._navigationPresenter.init(this._tablePresenter);
  }

  // Прокидываем этот метод, чтобы запустить в app на resize.
  setCountSymbols() {
    this._tablePresenter.setCountSymbols();
  }
}

export default MainPresenter;
