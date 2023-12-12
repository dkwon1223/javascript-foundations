function createMeal(stringType, numCalGoal, arrayDishes = []) {
    let meal = {
        type: stringType,
        calorieGoal: numCalGoal,
        dishes: arrayDishes
    };
    return meal;
}

function addDish(objectMeal, objectDish) {
    if(objectDish.calories > objectMeal.calorieGoal) {
        return objectMeal;
    } else {
        objectMeal.dishes.push(objectDish);
        objectMeal.calorieGoal -= objectDish.calories;
        return objectMeal;
    }
}

function calculateCalories(objectMeal) {
    totalCalories = 0;
    for(let i = 0; i < objectMeal.dishes.length; i++) {
        totalCalories += objectMeal.dishes[i].calories;
    }
    return `${objectMeal.type} has a total of ${totalCalories} calories.`;
}

module.exports = { 
    createMeal,
    addDish,
    calculateCalories
};