function clearLocalStorage() {
  localStorage.clear();
}

// Event handler -- assigns value to each object according to user input
function collectBudgetData(event){
  event.preventDefault();

  // If there is a pie chart already on the page, clear it. If not, add it.
  if (document.getElementsByClassName('canvas-pie-chart')[0]){
    console.log('benton says');
    var canvasSection = document.getElementById('canvas-section');
    console.log('remove child thing: ', document.getElementsByTagName('canvas')[0]);
    canvasSection.removeChild(document.getElementsByTagName('canvas')[0]);
    var canvasEl = document.createElement('canvas');
    canvasSection.appendChild(canvasEl);
  } else {
    var canvasEl = document.createElement('canvas');
    var canvasSection = document.getElementById('canvas-section');
    canvasSection.appendChild(canvasEl);
  }

  canvasEl.setAttribute('class', 'canvas-pie-chart');
  canvasEl.setAttribute('width', '400px');
  canvasEl.setAttribute('height', '400px');
  context = canvasEl.getContext('2d');

  // Takes input and updates expense property of objects. Checks if input is NaN and changes it to 0 if not.
  monthlyIncome = parseInt(event.target.enterIncome.value);
  rentExpense.expense = parseInt(event.target.rentMortgage.value);
  foodExpense.expense = parseInt(event.target.foodGroceries.value);
  insuranceExpense.expense = parseInt(event.target.insurance.value);
  utilitiesExpense.expense = parseInt(event.target.utilities.value);
  loansExpense.expense = parseInt(event.target.loansCcDebt.value);
  transportationExpense.expense = parseInt(event.target.transportation.value);

  // Calculates remaining income for the month after submitting expenses
  function monthlyIncomeRemaining() {
    incomeRemaining = monthlyIncome;
    for (var i = 0; i < fullBudget.length; i++) {
      incomeRemaining -= fullBudget[i].expense;
    }
    console.log('Monthly income remaining ' + incomeRemaining);
    return incomeRemaining;
  }

// Changes NaN (blank input) values to 0
  function makeInputValid(target) {
    if (typeof target !== 'number') {
      target = 0;
    }
  }

  // Storing objects and monthly income in local storage
  localStorage.setItem('Budget Data', JSON.stringify(fullBudget));
  localStorage.setItem('Monthly Income', JSON.stringify(monthlyIncome));
  localStorage.setItem('Monthly Income Remaining', JSON.stringify(monthlyIncomeRemaining()));

  function PieChartData(){
    this.allPieData = [];
  }

  PieChartData.prototype.pushData = function(pieData){
    this.allPieData.push(pieData);
  };

  PieChartData.prototype.renderToCanvas = function(context){
    new Chart(context).Pie(this.allPieData);
  };

  function PieData(label, value, color){
    this.label = label;
    this.value = value;
    this.color = color;
    this.highlight = '#fa7a7a';
  }

  var data = [

    {
      value: rentExpense.expense,
      color: '#7C05F2',
      highlight: '#46F2E5',
      label: 'Rent'
    },
    {
      value: foodExpense.expense,
      color: '#50F205',
      highlight: '#46F2E5',
      label: 'Food'
    },
    {
      value: insuranceExpense.expense,
      color: '#F2E105',
      highlight: '#46F2E5',
      label: 'Insurance'
    },
    {
      value: utilitiesExpense.expense,
      color: '#F28805',
      highlight: '#46F2E5',
      label: 'Utilities'
    },
    {
      value: loansExpense.expense,
      color: '#F20505',
      highlight: '#46F2E5',
      label: 'Loans'
    },
    {
      value: transportationExpense.expense,
      color: '#5C92F2',
      highlight: '#46F2E5',
      label: 'Transportation'
    },
    {
      value: incomeRemaining,
      color: '#F221AD',
      highlight: '#46F2E5',
      label: 'Remaining Income'
    }
  ];
  var myPieChart = new Chart(context).Pie(data);
  document.getElementById('chart-legend-location').innerHTML = myPieChart.generateLegend();
  console.log(myPieChart.generateLegend());
  monthlyIncomeRemaining();
}

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
  youHaveSaved.setAttribute('class', 'saved-text');
  savingsData = document.getElementById('savingsData');
  savingsData.textContent = '';
  if (currentSavings <= howMuch) {
    youHaveSaved.textContent = 'You have saved $' + currentSavings + ' towards the $' + howMuch + ' needed for ' + savingsFor + '!';
  } else {
    youHaveSaved.textContent = 'Congratulations! You have met your goal of $' + howMuch + '!';
  }
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
