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
  const gridBox = document.querySelectorAll('.grid-box');

  gridBox.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = setBackgroundColor();
    });
  });
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
button.textContent = 'ReSize Board';
container.appendChild(button);
button.style.cssText = `
position: absolute;
bottom: 0;
margin: -35px`;

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