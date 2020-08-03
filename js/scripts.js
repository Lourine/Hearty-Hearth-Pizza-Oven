// Business Logic
var totalPriceArray = []; //Only global variable in code
function Order (flavor,customSize, crust) {
  this.flavor=5;
  this.customSize = customSize;
  this.crust = crust;
  this.veggie1 = 1;
  this.veggie2 = 1;
  this.meat = 2;
  this.pizzaPrice = 0;
}
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small 10 in.") {
    this.pizzaPrice += 6;
  } else if (this.customSize === "Medium 14 in.") {
    this.pizzaPrice += 9;
  } else if (this.customSize === "Large 18 in.") {
    this.pizzaPrice += 12;
  }
  if (this.crust === "crispy") {
    this.pizzaPrice += 1;
  } else if (this.crust === "stuffed") {
    this.pizzaPrice += 0.5;
  } else if (this.crust === "gluten-free") {
    this.pizzaPrice += 1.5;
  }
  this.pizzaPrice += this.flavor;
  this.pizzaPrice += this.veggie1;
  this.pizzaPrice += this.veggie2;
  this.pizzaPrice += this.meat;
  return this.pizzaPrice;
}
Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]; 
  }
  return cartTotalPrice;
}
function Address (address) {
  this.address =address;
  this.deliveryAddress = address;
}