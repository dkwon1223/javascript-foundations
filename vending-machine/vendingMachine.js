function createItemStock(stringName = "unknown", numQuantity = 0, numPrice = 1.00)  {
    let item = {
        name: stringName,
        quantity: numQuantity,
        price: numPrice
    };
    return item;
}

function makePurchase(objectItem, numPayment) {
    if(numPayment < objectItem.price) {
        return `Sorry, you need at least $${objectItem.price} to make that purchase`;
    } else if (objectItem.quantity === 0) {
        return `Sorry, there are none left`;
    } else {
        return `Here are your ${objectItem.name}`;
    }
}

function collectChange(arrayCoins) {
    let total = 0;
    for(let i = 0; i < arrayCoins.length; i++) {
        total += arrayCoins[i];
    }
    return total;
}


module.exports = {
    createItemStock,
    collectChange,
    makePurchase
}
