
var monthlyBudgetAmount = 0;
var fullBudget = [];

// Creates new budget object
var budgetExpense = function(name, expense) {
  this.name = name;
  this.expense = expense;
  fullBudget.push(this);
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
