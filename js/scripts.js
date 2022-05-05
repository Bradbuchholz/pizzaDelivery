var Pizza = (forName, size, cheese, pepperoni, sausage, ham, bacon, mushrooms, onions, olives, peppers, ranchDrizzle) {
  this.forName = forName;
this.size = size;
this.cheese = cheese;
this.pepperoni = pepperoni;
this.sausage = sausage;
this.ham = ham;
this.bacon = bacon;
this.mushrooms = mushrooms;
this.onions = onions;
this.olives = olives;
this.peppers = peppers;
this.ranchDrizzle = ranchDrizzle;
}

Pizza.prototype.pricing = function() {
  var totalPrice = 0;
  if (this.size === 1) {
    totalPrice = totalPrice + 9;
  } else if (this.size === 2) {
    totalPrice = totalPrice + 11;
  } else if (this.size === 3) {
    totalPrice = totalPrice + 13;
  } else if (this.size === 4) {
    totalPrice = totalPrice + 16;
  
  } if 
}

