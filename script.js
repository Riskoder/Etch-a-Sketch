const container = document.querySelector('.container');

// Make board grid
function makeBoard(size) {
  for (let i = 1; i <= size * size; i++) {
    const newDiv = document.createElement('div');

    newDiv.classList.add('grid-box');
    newDiv.style.cssText = `
    display: flex;
    flex: 0 0 calc(100%/ ${size});
    height: calc(100% / ${size}); 
    gap: 3px; 
    flex-direction: column`;
    container.appendChild(newDiv);
  };
};

// Get Background color
function getRandomNumber() {
  return Math.floor(Math.random() * 256)
}

function setBackgroundColor() {
  let r = getRandomNumber();
  let g = getRandomNumber();
  let b = getRandomNumber();
  return`rgb(${r}, ${g}, ${b})`
}

//Change grid color:
function setGridBoxEvent() {
  const gridBox = document.querySelectorAll('.grid-box');

  gridBox.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = setBackgroundColor();
    });
  });
};

//Other way to change colors:
// function changeColor() {
//   return `rgb(${getRandomNumber}, rgb(${getRandomNumber}, rgb(${getRandomNumber})`
// }

function startGame() {
  makeBoard(16);
  setGridBoxEvent();
}

startGame()