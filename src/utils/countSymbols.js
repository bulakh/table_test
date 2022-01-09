//Можно было бы придумать что-то получше, но увы.

//Будем находить колличесво символов, которое выведется в колонке about.
//Находим длину блока about

export const calcCountSymbols = (count) => {
  const COUNT_STRINGS = 2;
  const REMOVED_SYMBOLS = 10;

  //Находим длину блока about.
  //На первом рендере исходя из ширины экрана.
  //Потом берем ширину блока about

  const blockAbout = document.querySelector('.block-about');

  const widthBlockFromWindow = window.innerWidth * 28.87/100;

  let fontSize;
  let widthBlockAbout;

  if (blockAbout) {
    fontSize = window.getComputedStyle(blockAbout).fontSize;
    widthBlockAbout = blockAbout.clientWidth;
  }

  //Первый рендер
  if (count === null) {
    //Тут махинации от ширины, чтобы в блоке about всегда было две строки.
    count = Math.round((widthBlockFromWindow * 2 / parseInt(fontSize, 10)) * COUNT_STRINGS);
    const screenWidths = [1700, 1600, 1320, 1080, 930];

    screenWidths.map(width => {
      if (window.innerWidth < width) {
        count -= REMOVED_SYMBOLS;
      }
    })
    return count < 0 ? 0 : count;
  }

  //Последующие рендеры.
  count = Math.round((widthBlockAbout * 1.7 / parseInt(fontSize, 10)) * COUNT_STRINGS);

  if (window.innerWidth < 1282) {
    count -= REMOVED_SYMBOLS;
  }

  return count;
}
