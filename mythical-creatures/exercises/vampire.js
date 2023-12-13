function createVampire(stringName, stringPet = "bat", booleanThirsty = true, numOuncesDrank = 0) {
  let vampireObject = {
    name: stringName,
    pet: stringPet,
    thirsty: booleanThirsty,
    ouncesDrank: numOuncesDrank
  }
  return vampireObject;
}

function encounterDeliciousVictim(vampireObject) {
  if(vampireObject.thirsty === true) {
    return "I WANT TO SUCK YOUR BLOOD!";
  } else {
    return "No thanks, I am too full.";
  }
}

function drink(vampireObject) {
  if(vampireObject.ouncesDrank <= 40) {
    vampireObject.ouncesDrank += 10;
  } 
  if(vampireObject.ouncesDrank === 50) {
    vampireObject.thirsty = false;
  }
  return vampireObject;
}

function inquirePlace(arrayLocations, stringLocation) {
  if(arrayLocations.includes(stringLocation)) {
    return `Yes, I have spent some time in ${stringLocation}.`;
  } else {
    return `No, I have never been to ${stringLocation}.`;
  }
}

function findBatLovers(arrayVampires) {
  let batLovers = [];
  for(let i = 0; i < arrayVampires.length; i++) {
    if(arrayVampires[i].pet === "bat") {
      batLovers.push(arrayVampires[i].name);
    }
  }
  return batLovers;
}
module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim,
  inquirePlace
};