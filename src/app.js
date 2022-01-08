import './styles.css';
import { users } from './mocks';
import TableModel from './model/TableModel';
import TablePresenter from './presenter/TablePresenter';
import NavigationPresenter from './presenter/NavigationPresenter';
import { DEFAULT_COLUMNS } from './const';

// const table = document.querySelector('.table');
const tableWrap = document.querySelector('.table-wrap');
const tableWrapMain = document.querySelector('.table-wrap__main');
const tableSort = document.querySelector('.select-wrap');

const tableModel = new TableModel(users, DEFAULT_COLUMNS);

const tablePresenter = new TablePresenter(tableWrapMain, tableWrap, tableModel);
tablePresenter.init();

const navigationPresenter = new NavigationPresenter(tableWrap, tableSort, tableModel, tablePresenter);
navigationPresenter.init();

window.onresize = tablePresenter.setCountSymbols;


