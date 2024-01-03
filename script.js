// Selecting the necessary elements from the HTML DOM
const input = document.querySelector('.input');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const percentBtn = document.querySelector('.percent');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.subtract');
const plusBtn = document.querySelector('.plus');
const equalsBtn = document.querySelector('.equals');

const numberBtns = document.querySelectorAll('.btn:not(.clear):not(.backspace):not(.percent):not(.divide):not(.multiply):not(.subtract):not(.plus):not(.equals)');

let currentInput = '0';

// Function to handle operator button click
function handleOperatorClick(operator) {
  currentInput += operator;
  input.value = currentInput;
}

// Function to handle number button click
function handleNumberClick(value) {
  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  input.value = currentInput;
}

// Adding click event listeners to number buttons
numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    handleNumberClick(button.textContent);
  });
});

// Adding click event listener to clear button
clearBtn.addEventListener('click', () => {
  currentInput = '0';
  input.value = currentInput;
});

// Adding click event listener to backspace button
backspaceBtn.addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  input.value = currentInput === '' ? '0' : currentInput;
});

// Adding click event listener to percent button
percentBtn.addEventListener('click', () => {
  try {
    currentInput = (parseFloat(currentInput) / 100).toString();
    input.value = currentInput;
  } catch (err) {
    alert('Invalid input');
    currentInput = '0';
    input.value = currentInput;
  }
});

// Adding click event listeners to operator buttons
divideBtn.addEventListener('click', () => handleOperatorClick('/'));
multiplyBtn.addEventListener('click', () => handleOperatorClick('*'));
subtractBtn.addEventListener('click', () => handleOperatorClick('-'));
plusBtn.addEventListener('click', () => handleOperatorClick('+'));

// Adding click event listener to equals button
equalsBtn.addEventListener('click', () => {
  try {
    const result = new Function('return ' + currentInput)();
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid result');
    }
    currentInput = result.toString();
    input.value = currentInput;
  } catch (err) {
    alert('Invalid input or division by zero');
    currentInput = '0';
    input.value = currentInput;
  }
});

// function for dark/light mode
function changeMode() {
  const body = document.body;

  if (body.classList.contains('dark-mode')) {
      // Switch to Light Mode
      body.classList.remove('dark-mode');
      document.querySelector('.changeModeBtn').innerText = 'Dark Mode';
  } else {
      // Switch to Dark Mode
      body.classList.add('dark-mode');
      document.querySelector('.changeModeBtn').innerText = 'Light Mode';
  }
}