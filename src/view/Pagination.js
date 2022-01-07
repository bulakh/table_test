import Abstract from "./Abstract";

const createPaginationTemplate = (count) => {
  const pageButtons = [];
  for (let i = 1; i <= count; i++) {
    pageButtons.push(`<li><input type='button' class='pagination__btn' value='${i}'></li>`);
  };

  return `<ul class='pagination__list'>${pageButtons.join('')}</ul>`;
}

export default class Pagination extends Abstract {
  constructor(count) {
    super();
    this._count = count;

    this._changeCurrentPageNumber = this._changeCurrentPageNumber.bind(this);
  }

  getTemplate() {
    return createPaginationTemplate(this._count);
  }

  _changeCurrentPageNumber(e) {
    e.preventDefault();
    this._callback.changePage(e);
  }

  setClickChangePageNumber(callback) {
    this._callback.changePage = callback;
    Array.from(this.getElement().querySelectorAll('.pagination__btn')).map(btn => btn.addEventListener('click', this._changeCurrentPageNumber));
  }

}
