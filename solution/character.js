class Character {
  constructor() {
    this.health = 100;
  }
  getHealth() {
    return this.health;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}

export default Character;
