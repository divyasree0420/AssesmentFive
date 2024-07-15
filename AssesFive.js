// Superclass (parent class)
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method in the superclass
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Subclass (child class) extending Animal
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the superclass with super()
    }

    // Method in the subclass
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Example usage:
let dog = new Dog('Buddy');
dog.speak(); // Output: "Buddy barks."
//-----------------------------------------------------------------
//USING INHERITENCE FOR METHODS AND PROPERTIES
// Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method in the superclass
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Subclass extending Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    // Method in the subclass
    speak() {
        console.log(`${this.name} barks.`);
    }

    // New method in the subclass
    describe() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

// Example usage:
let dog = new Dog('Buddy', 'Labrador');
dog.speak(); // Output: "Buddy barks."
dog.describe(); // Output: "Buddy is a Labrador."
//----------------------------------------------------------------------
//ACCESSING AND MODIFYING PROPERTIES
// Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method in the superclass
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Subclass extending Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    // Method in the subclass
    describe() {
        console.log(`${this.name} is a ${this.breed}.`);
    }

    // Override the speak method
    speak() {
        super.speak(); // Call the superclass method
        console.log(`${this.name} barks.`);
    }
}

// Example usage:
let dog = new Dog('Buddy', 'Labrador');
dog.speak(); // Outputs both: "Buddy makes a noise." and "Buddy barks."
dog.describe(); // Output: "Buddy is a Labrador."

// Modify properties
dog.name = 'Max';
dog.breed = 'Poodle';
dog.describe(); // Output: "Max is a Poodle."
