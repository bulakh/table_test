import './styles.css';
import { users } from './mocks';
import TableModel from './model/TableModel';
import TablePresenter from './presenter/TablePresenter';

const table = document.querySelector('.table');
// const tableList = document.querySelector('.table-list');
const tableWrap = document.querySelector('.table-wrap');
const tableSort = document.querySelector('.select-wrap');

const tableModel = new TableModel(users.slice(0, 10));

const tablePresenter = new TablePresenter(table, tableWrap, tableSort, tableModel);

tablePresenter.init();

window.onresize = tablePresenter.setCountSymbols;


