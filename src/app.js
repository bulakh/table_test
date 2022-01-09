import './styles.css';
import { users } from './mocks';
import TableModel from './model/TableModel';
import MainPresenter from './presenter/MainPresenter';
import { getObjFromJson } from './utils/others';
import { TABLE_HEADERS } from './const';

//Основной файл, в который будем собирать другие.
//Данные мы подключаем из файла с моками, по условию их не нужно загружать.

//Контейнеры, в которые будем рендерить компоненты.
const tableWrap = document.querySelector('.table-wrap');
const tableWrapMain = document.querySelector('.table-wrap__main');
const tableNav = document.querySelector('.nav');

//Парсим json в объект.
const allUsers = getObjFromJson(users);

//Модель с данными
const tableModel = new TableModel(allUsers, TABLE_HEADERS);

//Презанетер отвечает за логику связи данных и отображения.
const mainPresenter = new MainPresenter(tableWrap, tableWrapMain, tableNav, tableModel);

//Инициализация
mainPresenter.init()

//Используем метод на изменение размера экрана, чтобы отображать две строки в колонке about
window.onresize = mainPresenter.setCountSymbols;


