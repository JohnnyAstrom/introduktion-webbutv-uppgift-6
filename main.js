// Funktion som konverterar text till versaler
function convertToUpperCase() {
  const input = document.getElementById('textInput');
  input.value = input.value.toUpperCase();
  console.log(input.value);
}

// Funktion som lägger till eventlyssnaren
function addEventListeners() {
  const button = document.getElementById('convertBtn');
  if (button) {
    button.addEventListener('click', convertToUpperCase);
  }
}

// Kör addEventListeners() när sidan laddas
document.addEventListener('DOMContentLoaded', addEventListeners);

// Exportera funktionerna för att använda i tester
module.exports = { convertToUpperCase, addEventListeners };