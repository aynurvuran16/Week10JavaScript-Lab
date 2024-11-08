// Step 1: Create the 'Car' constructor function
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// Step 2: Implement the 'accelerate' method
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// Step 3: Implement the 'brake' method
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// Step 4: Create two Car objects and test the accelerate and brake methods

// Car 1: BMW going at 120 km/h
const car1 = new Car('BMW', 120);
car1.accelerate(); // Accelerates BMW
car1.accelerate(); // Accelerates BMW again
car1.brake(); // BMW brakes

// Car 2: Mercedes going at 95 km/h
const car2 = new Car('Mercedes', 95);
car2.accelerate(); // Accelerates Mercedes
car2.brake(); // Mercedes brakes
car2.brake(); // Mercedes brakes again
