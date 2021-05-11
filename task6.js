class Vehicle {
    constructor(name, fuel) {
        console.log(`I'm ${name}`)
        this.x = 0;
        this.y = 0;
        this.step = 1;
        this.name = name;
        this.fuel = fuel;
    }
    
    getCoords() {
        return `(${this.x}, ${this.y})`;
    }
  
    getFuel() {
        return `The fuel is ${this.fuel}L`;
    }
  
    useFuel() {
        this.fuel = this.fuel - this.step;
    }
  
    moveForward() {
        this.useFuel();
        this.x = this.x + this.step;
        return `Forward: ${this.getCoords()} ${this.getFuel()}`;
    }
  
    moveBack() {
        this.useFuel();
        this.x = this.x - this.step;
        return `Back: ${this.getCoords()} ${this.getFuel()}`;
    }
}


let v = new Vehicle('Tractor', 100);
console.log(v.moveForward()); // '(1, 0) The fuel is 99L'  
console.log(v.moveBack()); // '(0, 0) The fuel is 98L'

class Car extends Vehicle {
    constructor(name, fuel) {
        super(name, fuel)
        this.nitro = false;
    }
    
    canMove() {
        return this.fuel >= this.step;
    }

    turnOnNitro() {
        this.nitro = true;
        this.step =2;
        return `Nitro:ON, step is ${this.step}`
    }

    turnOffNitro() {
        this.nitro = false;
        this.step = 1;
        return `Nitro:OFF, step is ${this.step}`
    }

    moveRight() {
        if (!this.canMove()) return "No fuel"
        this.useFuel();
        this.y = this.y - this.step;
        return `Right: ${this.getCoords()} ${this.getFuel()}`;
    }
  
    moveLeft() {
        if (!this.canMove()) return "No fuel"
        this.useFuel();
        this.y = this.y + this.step;
        return `Left: ${this.getCoords()} ${this.getFuel()}`;
    }

    moveForward() {
        if (!this.canMove()) return "No fuel"
        return super.moveForward()
    }

    moveBack() {
        if (!this.canMove()) return "No fuel"
        return super.moveBack()
    }

}

const test = new Car('Audi R8', 10);

console.log(test.moveRight()) // (0, -1), Fuel:9
console.log(test.moveRight()) // (0, -2), Fuel:8
console.log(test.turnOnNitro()) // Step:2, Nitro:On
console.log(test.moveForward()) // (2, -2), Fuel:6
console.log(test.moveForward()) // (4, -2), Fuel:4
console.log(test.turnOffNitro()) // Step:1, Nitro:Off
console.log(test.moveBack()) // (3, -2), Fuel:3
console.log(test.moveLeft()) // (3, -1), Fuel:2
console.log(test.turnOnNitro()) // Step:2, Nitro:On
console.log(test.moveLeft()) // (3, 1), Fuel:0
console.log(test.moveBack()) // No fuel