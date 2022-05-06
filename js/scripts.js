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
  }
  
  if (this.cheese === 1) {
    totalPrice = totalPrice + 1;
  } else if (this.cheese === 2) {
    totalPrice = totalPrice + 2;
  }
  
  if (this.pepperoni === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.pepperoni === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.pepperoni === 3) {
    totalPrice = totalPrice +3;
  }

  if (this.sausage === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.sausage === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.sausage === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.ham === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.ham === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.ham === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.bacon === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.bacon === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.bacon === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.mushrooms === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.mushrooms === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.mushrooms === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.onions === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.onions === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.onions === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.olives === 1) {
    totalPrice = totalPrice + 0; 
  } else if (this.olives === 2) {
    totalPrice === totalPrice + 2;
  } else if (this.olives === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.peppers === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.peppers === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.peppers === 3) {
    totalPrice = totalPrice + 3;
  }

  if (this.ranchDrizzle === 1) {
    totalPrice = totalPrice + 0;
  } else if (this.ranchDrizzle === 2) {
    totalPrice = totalPrice + 2;
  } else if (this.ranchDrizzle === 3) {
    totalPrice = totalPrice + 3;
  }

  return totalPrice;
}

Pizza.prototype.toppings = function() {
  var toppingsArray = [];

  if (this.size === 1) {
    toppingsArray.push("Small");
  } else if (this.size === 2) {
    toppingsArray.push("Medium");
  } else if (this.size === 3) {
    toppingsArray.push("Large");
  } else if (this.size === 4) {
    toppingsArray.push("Extra Large");
  }

  
}
