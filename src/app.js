import './styles.css';
import { users } from './mocks';
import { render } from './utils';
import { RenderPosition } from './utils';
import User from './view/User';
import TableModel from './model/TableModel';
import TablePresenter from './presenter/TablePresenter';

const tableList = document.querySelector('.table-list');

const tableModel = new TableModel(users);

const tablePresenter = new TablePresenter(tableList, tableModel);

const buttonRemove = document.querySelector('.rmv');
const buttonGet = document.querySelector('.rcv');

buttonRemove.addEventListener('click', tablePresenter.clearUsers)
// buttonGet.addEventListener('click', tablePresenter.getCount);

tablePresenter.render();
tablePresenter.getCount();


window.onresize = tablePresenter.getCount;


