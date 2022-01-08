import { COUNT_USERS_ON_PAGE } from "../const";
import { divideUsers } from "../utils/divideUsers";
import { sortUsers } from "../utils/sort";

class TableModel {
  constructor (initialUsers = [], tableHeaders = []) {
    this._users = [...initialUsers];
    this._tableHeaders = [...tableHeaders];

    this._user = null;
    this._countSymbols = null;
    this._pageNumber = 0;

    this._usersOnPage = divideUsers(this._users.slice(), COUNT_USERS_ON_PAGE)[this._pageNumber];
  }

  setCountSymbols(containerAbout) {
    const width = window.innerWidth * 28.87/100;
    const fontSize = window.getComputedStyle(containerAbout).fontSize;
    this._countSymbols = Math.round((width * 1.7 / parseInt(fontSize, 10)) * 2);

    if (window.innerWidth < 1227) {
      this._countSymbols -= 10;
    }

    if (window.innerWidth < 1075) {
      this._countSymbols -= 15;
    }
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
}

export default TableModel;
