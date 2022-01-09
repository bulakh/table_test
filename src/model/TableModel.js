import { COUNT_USERS_ON_PAGE } from "../const";
import { calcCountSymbols } from "../utils/countSymbols";
import { divideUsers } from "../utils/divideUsers";
import { sortUsers } from "../utils/sort";

// Создаем model, здесь храним данные. set - записываем, get - получаем.
// На вход принимаем users и заголовки таблицы по умолчанию.
// Копируем оригинальные данные избегая муцтаций.

class TableModel {
  constructor (initialUsers = [], tableHeaders = []) {
    this._users = [...initialUsers];
    this._tableHeaders = [...tableHeaders];
    this._removedHeaders = [];

    this._user = null;
    this._countSymbols = null;
    this._pageNumber = 0;

    //Кол-во юзеров на странице. Поделим всех юзеров на массивы и будем отображать массив необходимой страницы.
    this._usersOnPage = divideUsers(this._users.slice(), COUNT_USERS_ON_PAGE)[this._pageNumber];
  }

  setCountSymbols() {
    this._countSymbols = calcCountSymbols(this._countSymbols);
  }

  setUser(e) {
    this._user = this._users.find(user => user.id === e.currentTarget.dataset.id);
  }

  setPageNumber(number) {
    this._pageNumber = number-1;

    this._usersOnPage = divideUsers(this._users.slice(), COUNT_USERS_ON_PAGE)[this._pageNumber];
  }

  setSortedUsers(sort) {
    const sortedDefaultPage = divideUsers(this._users.slice(), COUNT_USERS_ON_PAGE)[this._pageNumber];

    this._usersOnPage = sortUsers(this._usersOnPage, sort, sortedDefaultPage);
  }

  // Используем два массива с заголовками, один выводится в таблице, другой в кнопках на добавление колонок.
  setTableHeaders(header) {
    const currentIndexHeader = this._tableHeaders.indexOf(header);
    const indexRemovedHeader = this._removedHeaders.indexOf(header);

    if (currentIndexHeader > indexRemovedHeader && this._tableHeaders.length !== 1) {
      this._tableHeaders.splice(currentIndexHeader, 1);
      this._removedHeaders.push(header);
    }

    if (currentIndexHeader < indexRemovedHeader) {
      this._tableHeaders.push(header);
      this._removedHeaders.splice(indexRemovedHeader, 1);
    }
  }

  // Изменяем данные по id юзера.
  changeUsers(userData) {
    this._user = {...this._user, ...userData};
    this._users = this._users.map(user => {
      if (user.id === this._user.id){
        return this._user;
      }
      return user;
    })

    this._usersOnPage = divideUsers(this._users.slice(), COUNT_USERS_ON_PAGE)[this._pageNumber];
  }

  getUsers() {
    return this._users;
  }

  getUsersOnPage() {
    return this._usersOnPage;
  }

  getUser() {
    return this._user;
  }

  getCountSymbols() {
    return this._countSymbols;
  }

  getPageNumber() {
    return this._pageNumber;
  }

  getTableHeaders() {
    return this._tableHeaders;
  }

  getRemovedHeaders() {
    return this._removedHeaders;
  }
}

export default TableModel;
