console.log('javascript is working dummy');

var savingsForm = document.getElementById('savingsForm');
function collectSavingsData(event){
  event.preventDefault();

  var savingsFor = parseInt(event.target.savingsFor.value);
  console.log(savingsFor);
  var howMuch = parseInt(event.target.howMuch.value);
  console.log(howMuch);
  var addMoney = parseInt(event.target.addMoney.value);
  console.log(addMoney);
}

savingsFormform.addEventListener('submit', collectSavingsData);
