// Step 1: Create the 'CarCl' class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Step 2: Implement 'accelerate' method
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    // Step 3: Implement 'brake' method
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    // Step 4: Implement 'getter' for speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // Step 5: Implement 'setter' for speed in mi/h
    set speedUS(speedInMi) {
        this.speed = speedInMi * 1.6;
    }
}

// Step 6: Create a new 'CarCl' object and test

const car1 = new CarCl('Ford', 120);

// Accelerate and brake the car
car1.accelerate(); // Accelerates Ford
car1.brake(); // Ford brakes

// Test the getter for speed in mi/h
console.log(`Speed in mi/h: ${car1.speedUS}`);

// Test the setter for speed in mi/h
car1.speedUS = 80; // Set speed to 80 mi/h
console.log(`New speed in km/h: ${car1.speed}`); // Speed in km/h
