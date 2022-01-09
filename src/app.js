import './styles.css';
import { users } from './mocks';
import TableModel from './model/TableModel';
import { TABLE_HEADERS } from './const';
import MainPresenter from './presenter/MainPresenter';

const tableWrap = document.querySelector('.table-wrap');
const tableWrapMain = document.querySelector('.table-wrap__main');
const tableNav = document.querySelector('.nav');

const tableModel = new TableModel(users, TABLE_HEADERS);
const mainPresenter = new MainPresenter(tableWrap, tableWrapMain, tableNav, tableModel);

mainPresenter.init()

window.onresize = mainPresenter.setCountSymbols;


