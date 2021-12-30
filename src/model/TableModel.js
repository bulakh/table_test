
class TableModel {
  constructor (users = []) {
    this._users = [...users];
    this._countSymbols;
  }

  getUsers() {
    return this._users;
  }

  getCount(containerAbout) {
    const width = containerAbout.offsetWidth;
    const fontSize = window.getComputedStyle(containerAbout).fontSize;

    return Math.round((width * 1.3 / parseInt(fontSize, 10)) * 2);
  }

  clear() {
    this._users = [];
  }
}

export default TableModel;
