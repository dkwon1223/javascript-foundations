function createFavoriteFood(objectDish) {
    let favFood = {
        name: objectDish.dish,
        ingredients: objectDish.ingredients,
        isSpicy: objectDish.isSpicy,
        timesOrdered: 0
    }
    return favFood;
}

function commentOnSpiciness(objectFood) {
    if(objectFood.isSpicy === true) {
        return `Wow, this ${objectFood.name} is so spicy!`;
    } else {
        return `Phew, this ${objectFood.name} is not very spicy.`;
    }
}

function orderFood(objectFood) {
    objectFood.timesOrdered++;
    return objectFood;
}

function createShoppingList(arrayFoodObjects) {
    let list = [];
    for(let i = 0; i < arrayFoodObjects.length; i++) {
        list = list.concat(arrayFoodObjects[i].ingredients);
    }
    return list;
}

module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
}