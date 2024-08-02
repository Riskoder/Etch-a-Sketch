const container = document.querySelector('.container');

function makeBoard(size) {
  for (let i = 1; i <= size * size; i++) {
    const newDiv = document.createElement('div');

    newDiv.classList.add('grid-box');
    newDiv.style.cssText = `
    display: flex;
    flex: 0 0 calc(100%/ ${size});
    height: calc(100% / ${size}); `;
    container.appendChild(newDiv);
  };
  setGridBoxEvent();
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
//Other way to change colors:
// function changeColor() {
//   return `rgb(${getRandomNumber}, rgb(${getRandomNumber}, rgb(${getRandomNumber})`
// }

//Change grid color:
function setGridBoxEvent() {
  container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-box')) {
      e.target.style.backgroundColor = setBackgroundColor();
    }
  })
};

//Remove every Box from container
function deleteBoard() {
  const gridBoxes = document.querySelectorAll('.grid-box');

  gridBoxes.forEach((box) => {
    container.removeChild(box);
  });
};

//Make button for resize board
const button = document.createElement('button');
button.textContent = 'Resize Board';
button.classList.add('resize-button');
container.appendChild(button);

button.addEventListener('click', changeBoardSize);

function changeBoardSize() {
  const newSize = prompt('Enter the new Size (0 - 100)');

  if (newSize && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
    deleteBoard();
    makeBoard(newSize);
  };
};

function startGame() {
  makeBoard(16);
}

startGame()