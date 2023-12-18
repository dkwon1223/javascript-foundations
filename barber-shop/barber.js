function createBarber(stringName, numEarnings = 0, arrayCuts = []) {
    let barber = {
        name: stringName,
        earnings: numEarnings,
        haircuts: arrayCuts
    }
    return barber;
}

function giveCompliment(styleObject) {
    return `This ${styleObject.style} looks great!`;
}

function cutHair(barberObject, styleObject) {
    barberObject.haircuts.push(styleObject);
    barberObject.earnings += styleObject.price;
    return barberObject;
}

function listStyles(barberObject, stringStyle) {    
    let matchingStyles = [];
    for(let i = 0; i < barberObject.haircuts.length; i++) {
        if(barberObject.haircuts[i].hairLength === stringStyle) {
            matchingStyles.push(barberObject.haircuts[i].style);
        }
    }
    return matchingStyles;
}



module.exports = { 
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};