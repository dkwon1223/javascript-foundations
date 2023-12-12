function createIngredient(stringName = "unknown", numPrice = 0.00) {
    let ingredient = {
        name: stringName,
        price: numPrice
    };
    return ingredient;
}

function createTaco(stringName = "custom", arrayIngredients = []) {
    let taco = {
        name: stringName,
        ingredients: arrayIngredients
    };
    return taco;
}

function addIngredientToTaco(objectTaco, objectIngredient = null) {
    if(objectIngredient !== null) {
        objectTaco.ingredients.push(objectIngredient);
        return objectTaco;
    } else {
        return objectTaco;
    }
}

function calculatePrice(objectTaco) {
    let totalPrice = 0;
    for (let i = 0; i < objectTaco.ingredients.length; i++) {
        totalPrice += objectTaco.ingredients[i].price;
    }
    return totalPrice;
}
module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
