import Character from './character';

class Hero extends Character {
  constructor(name) {
    super();
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

export default Hero;
