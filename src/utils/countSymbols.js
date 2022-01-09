export const calcCountSymbols = (count) => {
  const blockAbout = document.querySelector('.block-about');

  const widthBlockFromWindow = window.innerWidth * 28.87/100;

  let fontSize;
  let widthBlockAbout;

  if (blockAbout) {
    fontSize = window.getComputedStyle(blockAbout).fontSize;
    widthBlockAbout = blockAbout.clientWidth;
  }

  if (count === null) {
    count = Math.round((widthBlockFromWindow * 2 / parseInt(fontSize, 10)) * 2);
    const widths = [1700, 1600, 1320, 1080, 930];

    widths.map(width => {
      if (window.innerWidth < width) {
        count -= 10;
      }
    })
    return count < 0 ? 0 : count;
  }

  count = Math.round((widthBlockAbout * 1.7 / parseInt(fontSize, 10)) * 2);

  if (window.innerWidth < 1282) {
    count -= 10;
  }

  console.log('widthOfBlockUtil', widthBlockAbout);

  return count;
}
