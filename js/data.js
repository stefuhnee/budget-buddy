var monthlyBudgetAmount = 0;
var fullBudget = [];
var monthlyIncome;
var context;
var howMuch;
var addMoney;
var savingsArray = [];
var savingsRemaining;
var currentSavings = 0;
var incomeRemaining;
var savingsData;
var budgetForm = document.getElementById('budget-form');
var monthlyIncome = JSON.parse(localStorage.getItem('Monthly Income'));
var fullBudget = JSON.parse(localStorage.getItem('Budget Data'));
var progress = document.getElementById('progress');
var savingsForm = document.getElementById('savingsForm');
var savingsIncomeEvent = document.getElementById('savings-income-event');
var savingsIncomeEventSection = document.getElementById('savings-income-event-section');
var savingsHeadingSection = document.getElementById('savings-heading-section');
var incomeRemainingHeading;
var percentageSavingsFieldset;
var percentageSavingsLabel;
var percentageSavingsInput;
var percentageSavingsButton;
var userPercentageValue;
var savingsAmount;
var addMoneyInput = document.getElementById('addMoney');
var clearButton = document.getElementById('clear');
var savingsForm = document.getElementById('savingsForm');

// Creates new budget object
var budgetExpense = function(name, expense) {
  this.name = name;
  this.expense = expense;
};

//button to start a new goal, clear savings from local storage
var clearLocalStorage = function(event){
  event.preventDefault();
  console.log('cleared data');
  localStorage.clear();
};

// Creates savings object
var savingsObject = {
  goalName: '',
  goalAmount: 0,
  currentAmount: 0
};

// Budget expense objects
var rentExpense = new budgetExpense('rent', 0);
var foodExpense = new budgetExpense('food', 0);
var insuranceExpense = new budgetExpense('insurance', 0);
var utilitiesExpense = new budgetExpense('utilities', 0);
var loansExpense = new budgetExpense('loans', 0);
var transportationExpense = new budgetExpense('transportation', 0);

var data = [
  {
    value: fullBudget[0].expense,
    color: '#7C05F2',
    highlight: '#46F2E5',
    label: 'Rent'
  },
  {
    value: fullBudget[1].expense,
    color: '#50F205',
    highlight: '#46F2E5',
    label: 'Food'
  },
  {
    value: fullBudget[2].expense,
    color: '#F2E105',
    highlight: '#46F2E5',
    label: 'Insurance'
  },
  {
    value: fullBudget[3].expense,
    color: '#F28805',
    highlight: '#46F2E5',
    label: 'Utilities'
  },
  {
    value: fullBudget[4].expense,
    color: '#F20505',
    highlight: '#46F2E5',
    label: 'Loans'
  },
  {
    value: fullBudget[5].expense,
    color: '#5C92F2',
    highlight: '#46F2E5',
    label: 'Transportation'
  },
  {
    value: JSON.parse(localStorage.getItem('Monthly Income Remaining')),
    color: '#F221AD',
    highlight: '#46F2E5',
    label: 'Remaining Income'
  }
];
