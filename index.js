const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  drivers.slice(0, -1);
}