//----------------------------------------------//
// createDragon
/*
Requirements:
- Input(s): 3 string arguments passed into corresponding parameters
- Outputs(s): object with properties corresponding to arguments passed into parameters

Pseudocode:
- DEFINE FUNCTION: createDragon() with PARAMETERS: nameString, riderString, tempermentString
- INITIALIZE OBJECT: dragonObject 
- KEYS: name, rider, temperment
- VALUES: nameString, riderString, tempermentString
- RETURN: dragonObject
*/

function createDragon(nameString, riderString, tempermentString) {
  let dragonObject = {
    name: nameString,
    rider: riderString,
    temperment: tempermentString
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


module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}