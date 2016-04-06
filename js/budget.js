var incomeRemaining;
console.log('javascript is working');

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
  var context = canvasEl.getContext('2d');

  var monthlyIncome = parseInt(event.target.enterIncome.value);
  console.log(monthlyIncome);
  rentExpense.expense = parseInt(event.target.rentMortgage.value);
  console.log(rentExpense);
  foodExpense.expense = parseInt(event.target.foodGroceries.value);
  console.log(foodExpense);
  insuranceExpense.expense = parseInt(event.target.insurance.value);
  console.log(insuranceExpense);
  utilitiesExpense.expense = parseInt(event.target.utilities.value);
  console.log(utilitiesExpense);
  loansExpense.expense = parseInt(event.target.loansCcDebt.value);
  console.log(loansExpense);
  transportationExpense.expense = parseInt(event.target.transportation.value);
  console.log(transportationExpense);

  // Calculates remaining income for the month after submitting expenses
  function monthlyIncomeRemaining() {
    incomeRemaining = monthlyIncome;
    for (var i = 0; i < fullBudget.length; i++) {
      incomeRemaining -= fullBudget[i].expense;
    }
    console.log('Monthly income remaining ' + incomeRemaining);
    return incomeRemaining;
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

// event listener
form.addEventListener('submit', collectBudgetData);
