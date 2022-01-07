import { sortUsers } from "../utils/sort";

class TableModel {
  constructor (initialUsers = []) {
    this._users = [...initialUsers];
    this._user = null;
    this._countSymbols = null;
    this._pageNumber = 0;
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
    this._pageNumber = number - 1;
  }

  changeUsers(userData) {
    this._user = {...this._user, ...userData};
    this._users = this._users.map(user => {
      if (user.id === this._user.id){
        return this._user;
      }
      return user;
    })
  }

  getUsers() {
    return this._users;
  }

  getUser() {
    return this._user;
  }

  getCountSymbols() {
    return this._countSymbols;
  }

  getSortedUsers(sort) {
    const sortedUsers = this._users.slice()

    return sortUsers(sortedUsers, sort, this._users);
  }

  getPageNumber() {
    return this._pageNumber;
  }
}

export default TableModel;
