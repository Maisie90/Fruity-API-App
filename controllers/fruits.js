const Fruit = require("../models/Fruit")

// INDEX

const index = async (req, res) => {   
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)  
    } catch (err) {
        res.status(500).send({"error": "Server Error"})
    }
}

// SHOW

const show = async (req, res) => {
    const name = req.params.name.toLowerCase()   //gets the fruit name from the URL
    try {
        const fruit = await Fruit.showOne(name)  // waits for the showOne function in the Fruit model
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({"error": "Fruit Not Found"})
    }
}

// CREATE

const create = async (req, res) => {
    try {
        const fruitData = req.body
        const newFruit = await Fruit.create(fruitData)
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send("Not able to add fruit")
    }
}

// UPDATE

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        const result = await fruit.update(req.body) // fruit referring to variable in line above, update calling the request for the information into the body
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send("No fruit with that name found")
    }
}

// DESTROY

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const deletedFruit = await Fruit.destroy(name)
        res.status(204).send(`${deletedFruit.name} has been deleted`)  //deletedFruit.name - defining what part (key) of the deleted fruit (object) information that we want to display (in this case, the name)
        
    } catch (err) {
        res.status(405).send("Unable to delete fruit")
    }
}

 module.exports = {
    index,
    show,
    create,
    update,
    destroy
 }