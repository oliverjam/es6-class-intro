# ES6 Classes

The ES6 class syntax is an easier way to create object-oriented structures in JavaScript. Previously you had to rely on prototypical inheritance with constructor functions:

```js
function Animal(species) {
  this.species = species;
}

Animal.prototype.getSpecies = function() {
  return this.species;
}

const tiger = new Animal('tiger');
tiger.getSpecies(); // tiger
```

This is kind of verbose and awkward (having to refer to the prototype all the time), so classes provide a new syntax for achieving the same result:

```js
class Animal {
  constructor(species) {
    this.species = species;
  }
  getSpecies() {
    return this.species;
  }
}

const tiger = new Animal('tiger');
tiger.getSpecies(); // tiger
```

The `constructor` method is the equivalent of the defining function in the first example. It takes whatever arguments you call the class with when you instantiate it with the `new` keyword.

### Inheritance

Classes make it easy to inherit functionality from other classes. We can use the `extends` keyword to access properties on the base class:

```js
class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const spot = new Dog('Spot');
spot.getSpecies(); // dog
spot.getName(); // Spot
```

`super` refers to the base class you're extending. So `super('dog')` is like calling `new Animal('dog')`, only from within our new class.

## Exercise

1. Clone the project and run `npm i`
2. `npm t` to run the test watcher
3. Open `index.js` and ignore the ugly prototype-based code
4. Rewrite `Character` and `Hero` to use ES6 classes
5. Keep all the tests passing!
