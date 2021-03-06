// Business Logic
var totalPriceArray = []; //Only global variable in code
function Order (customSize, crust) {
  this.flavor=500;
  this.customSize = customSize;
  this.crust = crust;
  this.veggie1 = 100;
  this.veggie2 = 150;
  this.meat = 200;
  this.pizzaPrice = 0;
}
Order.prototype.pizzaCost = function () {
  this.customSize=document.getElementById("size").value;
  if (this.customSize === "Small-Ksh-100") {
    this.pizzaPrice += 100;
  } else if (this.customSize === "Medium-Ksh-200") {
    this.pizzaPrice += 200;
  } else if (this.customSize === "Large-Ksh-300") {
    this.pizzaPrice += 300;
  }
  this.crust=document.getElementById("crust").value;
  if (this.crust === "crispy") {
    this.pizzaPrice += 100;
  } else if (this.crust === "stuffed") {
    this.pizzaPrice += 50;
  } else if (this.crust === "gluten-free") {
    this.pizzaPrice += 150;
  }
  console.log(this.pizzaPrice);
  this.pizzaPrice += this.flavor;
  this.pizzaPrice += this.veggie1;
  this.pizzaPrice += this.veggie2;
  this.pizzaPrice += this.meat;
  return this.pizzaPrice;
}
Order.prototype.orderCost = function () {
  var orderTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    orderTotalPrice += totalPriceArray[arrayElement]; 
  }
  return orderTotalPrice ;
}
Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  var deliveryPrice=300;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]; 
  }
  return cartTotalPrice +deliveryPrice;
}
function Address (address) {
  this.address =address;
  this.deliveryAddress = address;
}
//User Interface Logic
$(document).ready(function(event) {
    $("#pickup-btn").click(function() {
      $("#order-content").show();
      $("#landing-content").hide();
      $("#delivery-option").text("PICKUP BY CUSTOMER");
    });
    $("#delivery-btn").click(function() {
      $("#address").show();
      $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
    });
    $("form#address-form").submit(function(event) {
      event.preventDefault();
      var address = $("input#add").val();
      var newAddress = new Address(address)
      $("#order-content").show();
      $("#landing-content").hide();
      $("#delivery-option").text("Your Pizza will be delivered to: " + newAddress.deliveryAddress);
      alert("Delivery will cost you Ksh 300");
    });
    $("form#custom-pizza").submit(function(event) {
      event.preventDefault();
      var flavor= $("select#flavor").val();
      var customSize = $("select#size").val();
      var crust = $("select#crust").val();
      var veggie1 = $("select#veggie1").val();
      var veggie2 = $("select#veggie2").val();
      var meat = $("select#meat").val();
      var pizzaDetails = (flavor + ", "+ customSize +  ", " + crust + ", " + veggie1 + ", " + veggie2 + ", " + meat);
      var newPizzaOrder = new Order(flavor, customSize, crust);
      newPizzaOrder.pizzaCost();
      totalPriceArray.push(newPizzaOrder.pizzaPrice);
      $("#pizza-details-dropdown").show();
      $("#order-cost").text(newPizzaOrder.orderCost())
      $("#final-cost").text(newPizzaOrder.finalCost());
      $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
      $("# flavor #size, #crust, #veggie1, #veggie2, #meat").val("");
    

    });
    $("#pizza-details-dropdown").click(function() {
      $("#pizza-details").toggle();
    });
  //Checkout Btn
  $("#checkout-btn").click(function() {
    location.reload();
  });
});
