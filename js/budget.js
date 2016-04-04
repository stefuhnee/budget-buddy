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
  var rentMortgage = parseInt(event.target.rentMortgage.value);
  console.log(rentMortgage);
  var foodGroceries = parseInt(event.target.foodGroceries.value);
  console.log(foodGroceries);
  var insurance = parseInt(event.target.insurance.value);
  console.log(insurance);
  var utilities = parseInt(event.target.utilities.value);
  console.log(utilities);
  var loansCcDebt = parseInt(event.target.loansCcDebt.value);
  console.log(loansCcDebt);
  var transportation = parseInt(event.target.transportation.value);
  console.log(transportation);
}

form.addEventListener('submit', collectBudgetData);
