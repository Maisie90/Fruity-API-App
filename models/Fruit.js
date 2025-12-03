const fruits = require("../fruits.json")

class Fruit{
    constructor ({genus, name, id, family, order, nutritions}) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit))
    }

    static showOne = (name) => {
        const fruit = fruits.filter(fruit => fruit.name.toLowerCase() == name)
        if (fruit.length == 1){
            return new Fruit(fruit[0])       //instance of the fruit
        } else {
            throw Error("The fruit does not exist")
        }
    }

    static create = (data) => {
        const newFruit = data
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == newFruit.data.toLowerCase())
        if (!updatedFruit) {
        newFruit["id"] = fruits.length + 1
        fruits.push(newFruit)
        return new Fruit(newFruit)}
        else {
            throw error("fruit already exists")
        }
    }

    update (data) {                                       // arrow function will not work here as you cannot call it before it has been run
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        if (updatedFruit) {
            updatedFruit.name = data.name
            return new Fruit(updatedFruit)
        } else {
            throw error ("Fruit not found")
        }
    }

    static destroy = (name) => {
        
        const fruitIndex = fruits.findIndex(fruit => fruit.name.toLowerCase() == name)
        
        if (fruitIndex !== -1) {  
         const deletedFruit = fruits.splice(fruitIndex, 1)
         return deletedFruit[0]
        }
    }
}



module.exports = Fruit