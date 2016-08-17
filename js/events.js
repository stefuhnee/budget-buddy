// event listener
// if (document.getElementById('budget-form')) {
//   budgetForm.addEventListener('submit', collectBudgetData);
// }

$('#budget-form').on('submit', function(event) {
  event.preventDefault();
  if($('.canvas-pie-chart')){
    $('#canvas-section').empty();
    var canvasEl = document.createElement('canvas');
    $('#canvas-section').append(canvasEl);
  } else {
    var canvasEl = document.createElement('canvas');
    $('#canvas-section').append(canvasEl);
  }
  //setting canvasElement
  canvasEl.setAttribute('class', 'canvas-pie-chart');
  canvasEl.setAttribute('width', '400px');
  canvasEl.setAttribute('height', '400px');
  context = canvasEl.getContext('2d');

  // Takes input and updates expense property of objects.
  monthlyIncome = parseInt(event.target.enterIncome.value);
  rentExpense.expense = parseInt(event.target.rentMortgage.value);
  foodExpense.expense = parseInt(event.target.foodGroceries.value);
  insuranceExpense.expense = parseInt(event.target.insurance.value);
  utilitiesExpense.expense = parseInt(event.target.utilities.value);
  loansExpense.expense = parseInt(event.target.loansCcDebt.value);
  transportationExpense.expense = parseInt(event.target.transportation.value);

  var incomeRemaining = monthlyIncomeRemaining();
  localStorage.setItem('Monthly Income Remaining', JSON.stringify(incomeRemaining));

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

  // Storing objects and monthly income in local storage
  localStorage.setItem('Budget Data', JSON.stringify(fullBudget));
  localStorage.setItem('Monthly Income', JSON.stringify(monthlyIncome));

  var myPieChart = new Chart(context).Pie(data);
  document.getElementById$('#chart-legend-location').innerHTML = myPieChart.generateLegend();
});

if (document.getElementById('savings-income-event-section')) {
  savingsIncomeEvent.addEventListener('click', displayRemainingIncome);
  clearButton.addEventListener('click', clearLocalStorage);
  savingsForm.addEventListener('submit', collectSavingsData);
}
