const { convertToUpperCase, addEventListeners } = require('../main.js');

beforeEach(() => {
  document.body.innerHTML = `
    <input type="text" id="textInput" value="change to uppercase">
    <button id="convertBtn">Change to Uppercase</button>
  `;
  addEventListeners();
});

test('should convert text to uppercase', () => {
  const input = document.getElementById('textInput');
  convertToUpperCase();
  expect(input.value).toBe('CHANGE TO UPPERCASE');
});