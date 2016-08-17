(function(window, $){
  
  // Creates new budget object
  var BudgetExpense = function(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  };
  
  BudgetExpense.all = [];
  
  BudgetExpense.loadAll = function (data) {
    BudgetExpense.all = data.map(function (ele) {
      return new BudgetExpense(ele)
    });
  };
  
  BudgetExpense.fetchAll = function () {
    if (localStorage.getItem('Budget Data')) {
      
      this.loadAll(JSON.parse(localStorage.getItem('Budget Data')));
    
    } else {
    
      $.getJSON('../data/budgetItems.json', function (data) {
        
        BudgetExpense.loadAll(data);
        
        localStorage.setItem('Budget Data') = JSON.stringify(data);
        
      })
      
    }
  }
  
  var monthlyBudgetAmount = 0;
  var context;
  var howMuch;
  var addMoney;
  var savingsArray = [];
  var savingsRemaining;
  var currentSavings = 0;
  var incomeRemaining;
  var savingsData;
  var budgetForm = $('#budget-form');
  var progress = $('#progress');
  var savingsForm = $('#savingsForm');
  var savingsIncomeEvent = $('#savings-income-event');
  var savingsIncomeEventSection = $('#savings-income-event-section');
  var savingsHeadingSection = $('#savings-heading-section');
  var incomeRemainingHeading;
  var percentageSavingsFieldset;
  var percentageSavingsLabel;
  var percentageSavingsInput;
  var percentageSavingsButton;
  var userPercentageValue;
  var savingsAmount;
  var addMoneyInput = $('#addMoney');
  var clearButton = $('#clear');
  var budgetToSavingsLocation;
  var budgetToSavingsButton;

  //button to start a new goal, clear savings from local storage
  // PROBLEM = SAME NAME FOR DIFFERENT FUNCTIONS!
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
  var rentExpense = new BudgetExpense('rent', 0);
  var foodExpense = new BudgetExpense('food', 0);
  var insuranceExpense = new BudgetExpense('insurance', 0);
  var utilitiesExpense = new BudgetExpense('utilities', 0);
  var loansExpense = new BudgetExpense('loans', 0);
  var transportationExpense = new BudgetExpense('transportation', 0);
  
  // event listener
  if ($('#budget-form')) {
    budgetForm.on('submit', window.logic.collectBudgetData);
  }
  if ($('#savings-income-event-section')) {
    savingsIncomeEvent.on('click', window.logic.displayRemainingIncome);
    // WHICH clearLocalStorage is needed??
    clearButton.on('click', clearLocalStorage);
    savingsForm.on('submit', window.logic.collectSavingsData);
  }
  
  window.BudgetExpense = BudgetExpense;

}(window, jQuery));