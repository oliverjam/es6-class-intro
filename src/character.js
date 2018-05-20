function Character() {
  this.health = 100;
}

Character.prototype.getHealth = function() {
  return this.health;
};

Character.prototype.takeDamage = function(damage) {
  this.health -= damage;
};

module.exports = Character;
