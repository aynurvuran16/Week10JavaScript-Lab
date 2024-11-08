// Car constructor function
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// Accelerate and brake methods for Car
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// EV constructor function (inherits from Car)
function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// Inherit from Car prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Charge battery and accelerate methods for EV
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
};
EV.prototype.accelerate = function () {
    if (this.charge > 0) {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    } else {
        console.log(`${this.make} can't accelerate, battery is empty!`);
    }
};

// Test
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
