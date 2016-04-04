function collectBudgetData(){
  event.preventDefault();
  var form = document.getElementById('form');
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
