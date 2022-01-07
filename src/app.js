import './styles.css';
import { users } from './mocks';
import TableModel from './model/TableModel';
import TablePresenter from './presenter/TablePresenter';
import NavigationPresenter from './presenter/NavigationPresenter';

const table = document.querySelector('.table');
const tableWrap = document.querySelector('.table-wrap');
const tableSort = document.querySelector('.select-wrap');
const tableBody = document.querySelector('body');

const tableModel = new TableModel(users);

const tablePresenter = new TablePresenter(table, tableWrap, tableSort, tableModel);
const navigationPresenter = new NavigationPresenter(tableBody, tableModel, tablePresenter);

tablePresenter.init();
navigationPresenter.init();

window.onresize = tablePresenter.setCountSymbols;


