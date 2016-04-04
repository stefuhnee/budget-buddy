console.log('javascript is working');

var form = document.getElementById('form');

// Event handler -- assigns value to each object
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

// event listener
form.addEventListener('submit', collectBudgetData);
