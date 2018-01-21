function Character() {
  this.health = 100;
}

Character.prototype.getHealth = function() {
  return this.health;
}

Character.prototype.takeDamage = function(damage) {
  this.health -= damage;
}

function Hero(name) {
  Character.call(this);
  this.name = name;
}

Hero.prototype = Object.create(Character.prototype);

Hero.prototype.getName = function() {
  return this.name;
}

module.exports = { Character, Hero };
