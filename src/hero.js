const Character = require('./character');

function Hero(name) {
  Character.call(this);
  this.name = name;
}

Hero.prototype = Object.create(Character.prototype);

Hero.prototype.getName = function() {
  return this.name;
};

module.exports = Hero;
