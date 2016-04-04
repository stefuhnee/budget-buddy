console.log('javascript is working');
// var budgetExpense = function(name, expense) {
//   this.name = name;
//   this.expense = expense;
// };

var form = document.getElementById('form');
function collectBudgetData(event){
  event.preventDefault();

  var enterIncome = parseInt(event.target.enterIncome.value);
  console.log(enterIncome);
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
}

// Budget expense objects
var rentExpense = new budgetExpense('rent', 0);
var foodExpense = new budgetExpense('food', 0);
var insuranceExpense = new budgetExpense('insurance', 0);
var utilitiesExpense = new budgetExpense('utilities', 0);
var loansExpense = new budgetExpense('loans', 0);
var transportationExpense = new budgetExpense('transportation', 0);

form.addEventListener('submit', collectBudgetData);
