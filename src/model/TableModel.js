// import { sortType } from "../const";
import { sortUsers } from "../utils/sort";

class TableModel {
  constructor (initialUsers = []) {
    this._users = [...initialUsers];
    this._user = null;
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

  setUser(e) {
    this._user = this._users.find(user => user.id === e.currentTarget.dataset.id);
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

  // clearUsers() {
  //   return this._users = [];
  // }
}

export default TableModel;
