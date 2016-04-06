var howMuch;
var addMoney;
var savingsArray = [];
var savingsRemaining;
var currentSavings = 0;
var incomeRemaining;
var savingsData;
var monthlyIncome = JSON.parse(localStorage.getItem('Monthly Income'));
var fullBudget = JSON.parse(localStorage.getItem('Budget Data'));
var progress = document.getElementById('progress');
var savingsForm = document.getElementById('savingsForm');
var savingsIncomeEvent = document.getElementById('savings-income-event');
var savingsIncomeEventSection = document.getElementById('savings-income-event-section');
var savingsHeadingSection = document.getElementById('savings-heading-section');
var incomeRemainingHeading;
var incomeRemaining;
var percentageSavingsFieldset;
var percentageSavingsLabel;
var percentageSavingsInput;
var percentageSavingsButton;
var userPercentageValue;
var savingsAmount;
var addMoneyInput = document.getElementById('addMoney');

console.log('javascript is working dummy');

var clearButton = document.getElementById('clear');
var savingsForm = document.getElementById('savingsForm');

// Collects user info from savings form (event handler)
function collectSavingsData(event){
  event.preventDefault();

  savingsFor = event.target.savingsFor.value;
  console.log('Savings For: ', savingsFor);
  howMuch = parseInt(event.target.howMuch.value);
  console.log('How much to Save', howMuch);
  addMoney = parseInt(event.target.addMoney.value);
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

  //button to display savings data
  var youHaveSaved = document.createElement('article');
  savingsData = document.getElementById('savingsData');
  savingsData.textContent = '';
  youHaveSaved.textContent = 'You have saved ' + currentSavings + ' towards the ' + howMuch + ' needed for ' + savingsFor + '!';
  savingsData.appendChild(youHaveSaved);

// Progress bar
  if (currentSavings <= howMuch) {
    updateProgress((currentSavings / howMuch) * 100);
  };
}

// Event handler, on button click displays remaining income and asks if they'd like to save a percentage. Appends form and fieldset.
function displayRemainingIncome(event) {
  event.preventDefault();
  if (document.getElementsByTagName('h2')[0]) {
    savingsHeadingSection.innerHTML = '';
  }
  console.log('incomeRemaining' + incomeRemaining);
  incomeRemainingHeading = document.createElement('h2');
  incomeRemaining = JSON.parse(localStorage.getItem('Monthly Income Remaining'));
  console.log('income from local storage ' + incomeRemaining);
  incomeRemainingHeading.textContent = 'You have ' + incomeRemaining + ' remaining in your budget. What percentage would like you to set aside for your savings goal?';
  savingsHeadingSection.appendChild(incomeRemainingHeading);
  percentageSavingsFieldset = document.createElement('fieldset');
  percentageSavingsForm = document.createElement('form');
  percentageSavingsLabel = document.createElement('label');
  percentageSavingsLabel.setAttribute('name', 'userPercentage');
  percentageSavingsLabel.textContent = 'Enter a Percentage to Save:';
  percentageSavingsInput = document.createElement('input');
  percentageSavingsInput.setAttribute('type', 'text');
  percentageSavingsInput.setAttribute('name', 'userPercentage');
  percentageSavingsButton = document.createElement('button');
  percentageSavingsButton.setAttribute('type', 'submit');
  percentageSavingsButton.setAttribute('class', 'savings-button-color');
  percentageSavingsButton.textContent = 'Save Amount';
  savingsIncomeEventSection.appendChild(percentageSavingsForm);
  percentageSavingsForm.appendChild(percentageSavingsFieldset);
  percentageSavingsFieldset.appendChild(percentageSavingsLabel);
  percentageSavingsFieldset.appendChild(percentageSavingsInput);
  percentageSavingsForm.appendChild(percentageSavingsButton);
  percentageSavingsForm.addEventListener('submit', collectPercentageData);
}

function collectPercentageData(event) {
  event.preventDefault();
  userPercentageValue = parseInt(event.target.userPercentage.value);
  userPercentageValue /= 100;
  console.log('User percentage value inputted ' + userPercentageValue);
  savingsAmount = userPercentageValue * incomeRemaining;
  console.log('Savings amount in dollars ' + savingsAmount);
  addMoneyInput.setAttribute('value', savingsAmount);
}

// Progress bar updating function
function updateProgress(perc) {
  progress.style.width = perc + '%';
};

//button to start a new goal, clear savings from local storage
var clearLocalStorage = function(event){
  event.preventDefault();
  console.log('cleared data');
  localStorage.clear();
};

// Event listener
savingsIncomeEvent.addEventListener('click', displayRemainingIncome);
clearButton.addEventListener('click', clearLocalStorage);
savingsForm.addEventListener('submit', collectSavingsData);
