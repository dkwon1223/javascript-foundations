//----------------------------------------------//
// createDragon
/*
Requirements:
- Input(s): 3 string arguments passed into corresponding parameters AND... 2 default value arguments: number parameter for times eaten and boolean value for hungry
  - NOTE: Default parameters for times eaten should be zero and hungry should be true
- Outputs(s): object with properties corresponding to arguments passed into parameters


Pseudocode:
- DEFINE FUNCTION: createDragon() with PARAMETERS: nameString, riderString,  tempermentString, numberEaten, booleanHungry
- INITIALIZE OBJECT: dragonObject 
- KEYS: name, rider, temperment, timesEaten, hungry
- VALUES: nameString, riderString, tempermentString, numberEaten, booleanHungry
- RETURN: dragonObject
*/

function createDragon(nameString, riderString, tempermentString, numberEaten = 0, booleanHungry = true) {
  let dragonObject = {
    name: nameString,
    rider: riderString,
    temperment: tempermentString,
    timesEaten: numberEaten,
    hungry: booleanHungry
  };
  return dragonObject;
}
//----------------------------------------------//
// greetRider
/*
Requirements:
- Input(s): dragon object
- Output(s): dynamic string greeting

Pseudocode:
- DEFINE FUNCTION: greetRider() with PARAMETER: dragonObject
- RETURN: INTERPOLATED STRING: `Hi, ${dragonObject.rider}!`
*/

function greetRider(dragonObject) {
  return `Hi, ${dragonObject.rider}!`;
}
//----------------------------------------------//
// eat
/*
Requirements:
- NOTE: must modify createDragon function to include:
- KEYS: timesEaten, hungry
- VALUES: default 0, default true, but false when timesEaten is greater than 2
- Inputs: dragon object
- Output: modified dragon object
- NOTE: when eat function is invoked, increment timesEaten by 1
- NOTE: when timesEaten is greater than 2, reassign hungry key with false value

Pseudocode:
- DEFINE FUNCTION: eat() with PARAMETER: dragonObject 
- INCREMENT: dragonObject.timesEaten ++ 
- CONDITIONAL IF: evaluate whether dragonObject.timesEaten > 2
- IF TRUE: REASSIGN VALUE: dragonObject.hungry to false
- RETURN dragonObject
*/

function eat(dragonObject) {
  dragonObject.timesEaten++;
  if (dragonObject.timesEaten > 2) {
    dragonObject.hungry = false;
  }
  return dragonObject;
}
//----------------------------------------------//

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}