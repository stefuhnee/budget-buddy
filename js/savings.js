var howMuch;
var addMoney;
var savingsArray = [];
var savingsRemaining;

console.log('javascript is working dummy');

var savingsForm = document.getElementById('savingsForm');

// Collects user info from savings form (event hnalder)
function collectSavingsData(event){
  event.preventDefault();

  var savingsFor = event.target.savingsFor.value;
  console.log(savingsFor);
  var howMuch = parseInt(event.target.howMuch.value);
  console.log(howMuch);
  var addMoney = parseInt(event.target.addMoney.value);
  console.log(addMoney);
  var savingsRemaining = (howMuch - addMoney);
  console.log(savingsRemaining);
  return savingsRemaining;
}

// Event listener
savingsForm.addEventListener('submit', collectSavingsData);
