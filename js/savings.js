var howMuch;
var addMoney;
var savingsArray = [];
var savingsRemaining;
var currentSavings = 0;

console.log('javascript is working dummy');

var savingsForm = document.getElementById('savingsForm');

// Collects user info from savings form (event hnalder)
function collectSavingsData(event){
  event.preventDefault();

  var savingsFor = event.target.savingsFor.value;
  console.log('Savings For: ', savingsFor);
  var howMuch = parseInt(event.target.howMuch.value);
  console.log('How much to Save', howMuch);
  var addMoney = parseInt(event.target.addMoney.value);
  console.log('How much to add to Savings', addMoney);
  // Grabs current savings from local storage and adds inputted value to it.
  currentSavings = JSON.parse(localStorage.getItem('Current Savings'));
  currentSavings += addMoney;
  // Updates current savings in local storage
  localStorage.setItem('Current Savings', JSON.stringify(currentSavings));
  console.log('Current amount of savings', currentSavings);

  // Storing objects and monthly income in local storage
  localStorage.setItem('Total Savings Goal', JSON.stringify(howMuch));
  localStorage.setItem('Savings Remaining', JSON.stringify(savingsRemaining));
  localStorage.setItem('Current Savings', JSON.stringify(currentSavings));
  var savingsRemaining = (howMuch - currentSavings);
  console.log('Savings remaining: ', savingsRemaining);
}

function clearLocalStorage() {
  localStorage.clear();
}

// Event listener
savingsForm.addEventListener('submit', collectSavingsData);
