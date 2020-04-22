class Hamburger {
    constructor() {
        this.size = size,
        this.stuffing = stuffing,
        this.cost = 0,
        this.calories = 0
    }
    init () {
        this.getToppings ()
        this.createToping ()
        this.calculateSum ()
        this.calculateCalories ()
    } 
    getSize () {
        return this.size.name
    }
    getStuffing () {
        return this.stuffing.name
    }
    getToppings () {
        this.toppingList = ingredientsList.goods.filter(param => param.type==="topping")
        return this.toppingList
    }
    createToping () {
        this.topping = []
    }
    addTopping (index) {
        let topp = this.toppingList.find(param => param.name===index)
        let find = this.topping.find (param => param.name===index)
                if (find) {}
                else {
                    this.topping.push(topp)
                }
        this.calculateSum ()
        this.calculateCalories ()
    }
    removeTopping (index) {
        let find = this.topping.find (param => param.name===index)
        if (find) {this.topping.splice(this.topping.indexOf(find), 1)}
        this.calculateSum ()
        this.calculateCalories ()
    }
    calculateSum () {
        let toppingCost=0
        this.topping.forEach(el=>{
            return toppingCost+=el.cost
        })
        this.cost = this.size.cost + this.stuffing.cost + toppingCost
        return this.cost
    }
    calculateCalories () {
        let toppingCalories=0
        this.topping.forEach(el=>{
            return toppingCalories+=el.calories
        })
        this.calories = this.size.calories + this.stuffing.calories + toppingCalories
        return this.calories
    }
}


class Ingredient {
    constructor (name, cost, calories, type) {
        this.name = name,
        this.cost = cost,
        this.calories = calories,
        this.type = type
    }
    render () {
        return `<div class = "ingredient"><h1>${this.name}</h1><p>${this.cost}</p><p>${this.calories}</p></div>`
    }

}

class Ingredients {
    constructor() {
        this.goods = [
            {name: 'bigBurger', cost: 100, calories: 40, type: 'main'},
            {name: 'smallBurger', cost: 50, calories: 20, type: 'main'},
            {name: 'cheese', cost: 10, calories: 20, type: 'stuffing'},
            {name: 'salad', cost: 20, calories: 5, type: 'stuffing'},
            {name: 'potato', cost: 15, calories: 10, type: 'stuffing'},
            {name: 'herbs', cost: 15, calories: 0, type: 'topping'},
            {name: 'mayonnaise', cost: 20, calories: 5, type: 'topping'},
            {name: 'ketchup', cost: 20, calories: 5, type: 'topping'}
        ]
    }
    render () {
        let listHtml = ''
        this.goods.forEach(el=>{
            let ingredientItem = new Ingredient(el.name, el.cost, el.calories, el.type)
            listHtml+= ingredientItem.render()
        })
        document.querySelector(".ingredients-list").innerHTML = listHtml
    }
}
const ingredientsList = new Ingredients()
ingredientsList.render()

let size = new Ingredient ('bigBurger', 100, 40, 'main')
let stuffing = new Ingredient ('salad', 50, 10, 'stuffing')

let burger = new Hamburger(size, stuffing)
burger.init()

