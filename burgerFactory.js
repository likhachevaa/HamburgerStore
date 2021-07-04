class Param {
    name = '';
    price = 0;
    calories = 0;

    applyData(element) {
        this.name = element.value;
        // ({ price: this.price = 0, cal: this.calories = 0 } = Burger.burgerParams[this.name]);
        const { price = 0, cal = 0 } = Burger.burgerParams[this.name];
        this.price = price;
        this.calories = cal;

        return this;
    }
}

class Burger {
    static burgerParams = {
        big: {
            price: 100,
            cal: 40
        },
        small: {
            price: 50,
            cal: 20
        },
        salad: {
            price: 20,
            cal: 5
        },
        cheese: {
            price: 10,
            cal: 20
        },
        potato: {
            price: 15,
            cal: 10
        },
        mayo: {
            price: 20,
            cal: 5
        },
        spices: {
            price: 15,
            cal: 0
        }
    };

    constructor(size, add, topping) {
        this.size = new Param().applyData(this._select(size));
        this.add = new Param().applyData(this._select(add));
        this.toppings = this._getToppings(topping);
    }

    _getToppings(name) {
        return this._selectAll(name).map(el => new Param().applyData(el));
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }

    _sumPrice() {
        let result = this.size.price + this.add.price;
        this.toppings.forEach(el => result += el.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(el => result += el.calories);
        return result;
    }

    showSum(priceQuery, caloriesQuery) {
        document.querySelector(priceQuery).textContent = this._sumPrice();
        document.querySelector(caloriesQuery).textContent = this._sumCalories();
    }














}