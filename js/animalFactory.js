class Dog {
    constructor(name) {
        this.name = name;
    }

    voice() {
        console.log(`${this.name}: Au au! 🐕🐕`);
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    voice() {
        console.log(`${this.name}: Miau miau! 🐱🐱`);
    }
}

const animalFactory = (type, name) => {
    const types = {
        'cat': Cat,
        'dog': Dog,
    }
    const classType = types[type];
    return new classType(name);
}


const inputType = 'cat';
const inputName = 'Murkis';

const animal = animalFactory(inputType, inputName);
animal.voice();