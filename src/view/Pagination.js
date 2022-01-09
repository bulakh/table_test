import Abstract from "./Abstract";

//Компонент отрисовки навигации страницы.
//На вход кол-во страниц и текущая.

const createPaginationTemplate = (count, current) => {
  const pageButtons = [];
  for (let i = 1; i <= count; i++) {
    pageButtons.push(
      `<li><input type='button' class='pagination__btn ${i === current ? 'pagination__btn--active':''}' value='${i}'></li>`
    );
  };

  return `<ul class='pagination__list'>${pageButtons.join('')}</ul>`;
}

export default class Pagination extends Abstract {
  constructor(count,pageNumber) {
    super();
    this._count = count;
    this._currentPage = pageNumber+1;

    //Связывание.
    this._changeCurrentPageNumber = this._changeCurrentPageNumber.bind(this);
  }

  getTemplate() {
    return createPaginationTemplate(this._count, this._currentPage);
  }

  //Меняем текущую страницу
  _changeCurrentPageNumber(e) {
    e.preventDefault();
    this._callback.changePage(e);
  }

  setClickChangePageNumber(callback) {
    this._callback.changePage = callback;
    Array.from(this.getElement().querySelectorAll('.pagination__btn')).map(btn => btn.addEventListener('click', this._changeCurrentPageNumber));
  }

}
