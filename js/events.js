// event listener
if (document.getElementById('budget-form')) {
  budgetForm.addEventListener('submit', collectBudgetData);
}
if (document.getElementById('savings-income-event-section')) {
  savingsIncomeEvent.addEventListener('click', displayRemainingIncome);
  clearButton.addEventListener('click', clearLocalStorage);
  savingsForm.addEventListener('submit', collectSavingsData);

}
