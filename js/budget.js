console.log('javascript is working');

// Event handler -- assigns value to each object according to user input
function collectBudgetData(event){
  event.preventDefault();
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

  // Storing objects and monthly income in local storage
  localStorage.setItem('Budget Data', JSON.stringify(fullBudget));
  localStorage.setItem('Monthly Income', JSON.stringify(monthlyIncome));

  var canvasEl = document.getElementById('canvas-pie-chart');
  var context = canvasEl.getContext('2d');

  function PieChartData(){
    this.allPieData = [Rent, Food, Insurance, Utilities, Loans, Transportation,];
  }

  PieChartData.prototype.pushData = function(pieData){
    this.allPieData.push(pieData);
  };

  PieChartData.prototype.renderToCanvas = function(context){
    new Chart(context).PolarArea(this.allPieData);
  };

  function PieData(label, value, color){
    this.label = label;
    this.value = value;
    this.color = color;
    this.highlight = '#fa7a7a';
  }

  var data = [
    lables = [],
    {
      value: 300,
      color: '#F7464A',
      highlight: '#FF5A5E',
      label: 'Red'
    },
    {
      value: 50,
      color: '#46BFBD',
      highlight: '#5AD3D1',
      label: 'Green'
    },
    {
      value: 100,
      color: '#FDB45C',
      highlight: '#FFC870',
      label: 'Yellow'
    }
  ];

  var myPieChart = new Chart(context).Pie(data);
}

// event listener
form.addEventListener('submit', collectBudgetData);
