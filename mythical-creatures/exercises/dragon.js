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


module.exports = {
  createDragon, 
  // greetRider, 
  // eat, 
  // findFireBreathers
}