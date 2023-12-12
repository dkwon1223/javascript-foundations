function createPlayer(stringName, numAge, arrayMoves) {
    let player = {
        name: stringName,
        age: numAge,
        moveset: arrayMoves
    };
    return player; 
}

function createLevel(stringName, arrayPlayers) {
    let level = {
        name: stringName,
        players: arrayPlayers,
        coins: 0,
        lives: 3
    };
    return level;
}

function findCoins(objectLevel, numCoins) {
    if((numCoins + objectLevel.coins) >= 100) {
        objectLevel.coins += numCoins;
        objectLevel.lives ++;
        return objectLevel;
    } else {
        objectLevel.coins += numCoins;
        return objectLevel;
    } 
}

function defeatPlayer(objectLevel) {
    if(objectLevel.lives > 1) {
        objectLevel.lives --;
        return objectLevel;
    } else {
        return `GAME OVER`;
    }
}

module.exports = { 
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
};