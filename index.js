// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer="Larry";


//Reassigns the variable!
function upperCaseCustomerName(){
  customerName=customerName.toUpperCase();
}
//Creates a global scoped variable that's available for all to see! Oh no!
function setBestCustomer(){
  bestCustomer="not bob";
}

//Straight-up overrides that stuff - cuz its freely available in global scope!
function overwriteBestCustomer(){
  bestCustomer="maybe bob";
}


//Shows why a const is a good idea!
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer="Paige";
}
