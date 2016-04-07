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

var budgetToSavingsLocation;
var budgetToSavingsButton;
