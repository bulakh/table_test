import { sortType } from "../const";

class TableModel {
  constructor (initialUsers = []) {
    this._users = [...initialUsers];
    this._countSymbols = null;
  }

  getUsers() {
    return this._users;
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

  getCountSymbols() {
    return this._countSymbols;
  }

  getSortedUsers(sort) {
    const sortedUsers = this._users.slice()

    switch (sort) {
      case sortType.FIRST_NAME:
        return sortedUsers.sort((a, b) => (a.name.firstName > b.name.firstName ? 1 : -1));
      case sortType.LAST_NAME:
        return sortedUsers.sort((a, b) => (a.name.lastName > b.name.lastName ? 1 : -1));
      case sortType.ABOUT:
        return sortedUsers.sort((a, b) => (a.about > b.about ? 1 : -1));
      case sortType.EYE_COLOR:
        return sortedUsers.sort((a, b) => (a.eyeColor > b.eyeColor ? 1 : -1));
      default:
        return this._users;
    }
  }

  clear() {
    this._users = [];
  }
}

export default TableModel;
