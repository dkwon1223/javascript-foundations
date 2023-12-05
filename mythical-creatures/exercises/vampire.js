//----------------------------------------------//
// createVampire
/*
Requirements:
- Inputs: name string, pet string(default value = "bat"), boolean for thirsty(default value: true), number of ounces of blood drank(default value: 0)
- Outputs: object of vampire with properties aligning with arguments passed into parameters

Pseudocode:
- DEFINE FUNCTION: createVampire() with PARAMETERS: stringName, stringPet = "bat", booleanThirsty = true, numOuncesDrank
- INITIALIZE OBJECT VARIABLE: vampireObject 
- KEYS: name, pet, thirsty, ouncesDrank
- VALUES: stringName, stringPet, booleanThirsty, numOuncesDrank
- RETURN: vampireObject
*/

function createVampire(stringName, stringPet = "bat", booleanThirsty = true, numOuncesDrank) {
  let vampireObject = {
    name: stringName,
    pet: stringPet,
    thirsty: booleanThirsty,
    ouncesDrank: numOuncesDrank
  }
  return vampireObject;
}
//----------------------------------------------//
module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  // encounterDeliciousVictim, 
  // inquirePlace
}