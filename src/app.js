import './styles.css';
import { users } from './mocks';
import { render } from './utils';
import { RenderPosition } from './utils';
import User from './view/User';
import TableModel from './model/TableModel';
import TablePresenter from './presenter/TablePresenter';

const tableList = document.querySelector('.table-list');

const tableModel = new TableModel(users.slice(0, 20));

const tablePresenter = new TablePresenter(tableList, tableModel);

const buttonRemove = document.querySelector('.rmv');
// const buttonGet = document.querySelector('.rcv');
const selectSort = document.querySelector('.sort');

buttonRemove.addEventListener('click', tablePresenter.clearUsers)
selectSort.addEventListener('change', tablePresenter.sort);

tablePresenter.init();

window.onresize = tablePresenter.setCountSymbols;


