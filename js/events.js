// event listener
if (document.getElementById('budget-form')) {
  budgetForm.addEventListener('submit', collectBudgetData);
}
if (document.getElementById('savings-income-event-section')) {
  savingsIncomeEvent.addEventListener('click', displayRemainingIncome);
  savingsForm.addEventListener('submit', collectSavingsData);
}
if (document.getElementById('savings-clear-event-section')){
  clearButton.addEventListener('click', clearLocalStorage);
}
