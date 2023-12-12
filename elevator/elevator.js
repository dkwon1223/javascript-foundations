function createElevator(stringBuilding, numFloors, numCurrentFloor, arrayPassengers) {
    let elevator = {
        building: stringBuilding,
        floors: numFloors,
        currentFloor: numCurrentFloor,
        passengers: arrayPassengers
    };
    return elevator;
}

function changeFloors(objectElevator, numFloor) {
    if(objectElevator.currentFloor === numFloor) {
        return `You're already on floor ${numFloor}!`;
    } else if(numFloor > objectElevator.floors || numFloor < 1) {
        return `Floor ${numFloor} does not exist!`;
    } else {
        objectElevator.currentFloor = numFloor;
        return `Taking you to floor ${numFloor}!`;
    }
}

function dropOffPassenger(objectElevator, stringPassenger) {
    passengers = objectElevator.passengers;
    targetPassenger = stringPassenger;
    passengers.splice(passengers.indexOf(targetPassenger), 1);
    return passengers;
}


module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger
};
