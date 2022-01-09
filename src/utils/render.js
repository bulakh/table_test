import Abstract from "../view/Abstract";

//Вспомогательные функции для отрисовки компонентов.

// создаем массив сокращений тегов таблицы
const TABLE_ALIASES = ['tr', 'tb', 'th'];

//Словарь положений узла
export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};


// Основная функция отрисовки готового элемента, на вход: контейнер, элемент, местоположнение
export const render = (container, child, place) => {

  //Все вьюхи наследуют от класса абстракт
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

//Функция создания элемента

export const createElement = (template) => {
  let newElement;

  newElement = document.createElement('div');

  // Теги от table нельзя вкладывать в div
  if (TABLE_ALIASES.includes(template.slice(1, 3))) {
    newElement = document.createElement('table');
  }

  newElement.innerHTML = template;

  return newElement.firstChild;
};

//Удаление элемента

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error('Can remove only components');
  }

  component.getElement().remove();
  component.removeElement();
};


