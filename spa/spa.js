function createCustomer(stringName, numBill, arrayBookings = []) {
  let customer = {
    name: stringName,
    bill: numBill,
    bookings: arrayBookings
  };
  return customer;
}

function greeting(objectCustomer) {
  if(objectCustomer.bookings.length > 0) {
    return `${objectCustomer.name}! Welcome back to Happy Spa`;
  } else {
    return `${objectCustomer.name}! Welcome to Happy Spa`;
  }
}

function createService(stringName, numCost) {
  let service = {
    name: stringName,
    cost: numCost
  }
  if(service.name === undefined && service.cost === undefined) {
    return `Please provide service name and cost.`;
  } else {
    return service;
  }
}

function bookServices(objectCustomer, objectService) {
  objectCustomer.bookings.push(objectService.name);
  objectCustomer.bill += objectService.cost;
  return objectCustomer;
}

function applyGiftCard(arrayServices, numGcBalance) {
  let affordableServices = [];
  for(let i = 0; i < arrayServices.length; i++) {
    if(arrayServices[i].price <= numGcBalance) {
      affordableServices.push(arrayServices[i].name);
    }
  }
  return affordableServices;
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
