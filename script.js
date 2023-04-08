class Hamburger {
    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_LARGE = {price: 100, calories: 40};
    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_SPICE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};
  
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let price = this.size.price + this.stuffing.price;
      for (let i = 0; i < this.toppings.length; i++) {
        price += this.toppings[i].price;
      }
      return price;
    }
  
    calculateCalories() {
      let calories = this.size.calories + this.stuffing.calories;
      for (let i = 0; i < this.toppings.length; i++) {
        calories += this.toppings[i].calories;
      }
      return calories;
    }
  }
  
  const orderForm = document.getElementById("orderForm");
  const result = document.getElementById("result");
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const size = document.querySelector('input[name="size"]:checked').value;
    const stuffing = document.querySelector('input[name="stuffing"]:checked').value;
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const burger = new Hamburger(
      size === "small" ? Hamburger.SIZE_SMALL : Hamburger.SIZE_LARGE,
      stuffing === "cheese"
        ? Hamburger.STUFFING_CHEESE
        : stuffing === "salad"
        ? Hamburger.STUFFING_SALAD
        : Hamburger.STUFFING_POTATO
    );
    toppings.forEach((topping) => {
      switch (topping.value) {
        case "spice":
          burger.addTopping(Hamburger.TOPPING_SPICE);
          break;
        case "mayo":
          burger.addTopping(Hamburger.TOPPING_MAYO);
          break;
      }
    });
    const price = burger.calculatePrice();
    const calories = burger.calculateCalories();
    result.innerHTML = `Price: ${price} tugriks, Calories: ${calories}`;
  });
  