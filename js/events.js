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

//////******/////

if ($('#savings-income-event-section')) {
  $('#savings-income-event').on('click', function(e) {
    e.preventDefault();
    if ($('h2')) {
      $('#savings-heading-section').empty();
    }
    incomeRemainingHeading = document.createElement('h2');
    incomeRemaining = JSON.parse(localStorage.getItem('Monthly Income Remaining'));
    incomeRemainingHeading.textContent = 'You have $' + incomeRemaining + ' remaining in your budget. What percentage would like you to set aside for your savings goal?';
    $('#savings-heading-section').append(incomeRemainingHeading);

    var $percentForm = $('<form>');
    var $percentLabel = $('<label>');
    var $percentInput = $('<input>');
    var $savingsButton = $('<button>');

    $percentLabel.attr({name: 'userPercentage', class: 'percentage-savings'})
      .text('Enter a Percentage to Save:');

    $percentInput.attr({type: 'text', name: 'userPercentage', class: 'percentage-savings-form'});

    $savingsButton.attr({type: 'submit', class: 'savings-button-color', class: 'percentage-savings-button'})
      .text('Save Amount');

    if ($('.percentage-savings-form')) {
      $('#savings-income-event-section').append($percentForm);
      $percentForm.append($percentLabel)
      .append($percentInput)
      .append($savingsButton);

      collectPercentageData(e);
    }
  });

  clearButton.addEventListener('click', clearLocalStorage);
  savingsForm.addEventListener('submit', collectSavingsData);
}
