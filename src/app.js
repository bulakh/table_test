import './styles.css';
import { users } from './mocks';
import TableModel from './model/TableModel';
import { TABLE_HEADERS } from './const';
import MainPresenter from './presenter/MainPresenter';
import { getObjFromJson } from './utils/others';


const tableWrap = document.querySelector('.table-wrap');
const tableWrapMain = document.querySelector('.table-wrap__main');
const tableNav = document.querySelector('.nav');

const allUsers = getObjFromJson(users);

const tableModel = new TableModel(allUsers, TABLE_HEADERS);
const mainPresenter = new MainPresenter(tableWrap, tableWrapMain, tableNav, tableModel);

mainPresenter.init()

window.onresize = mainPresenter.setCountSymbols;


