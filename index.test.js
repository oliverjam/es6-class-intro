const { Character, Hero } = require('./');

describe('Character base class', () => {
  it('should be an object', () => {
    const actual = typeof new Character();
    const expected = 'object';
    expect(actual).toBe(expected);
  })
  it('should be able to get health', () => {
    const testChar = new Character();
    const actual = testChar.getHealth();
    const expected = 100;
    expect(actual).toBe(expected);
  })
  it('should be able to take damage', () => {
    const testChar = new Character();
    testChar.takeDamage(10);
    const actual = testChar.getHealth();
    const expected = 90;
    expect(actual).toBe(expected);
  })
})

describe('Hero extended class', () => {
  it('should be an object', () => {
    const actual = typeof new Hero();
    const expected = 'object';
    expect(actual).toBe(expected);
  })
  it('should be an instance of Character', () => {
    const actual = new Hero('Test') instanceof Character;
    const expected = true;
    expect(actual).toBe(expected);
  })
  it('should be able to get health', () => {
    const testHero = new Hero('Test');
    const actual = testHero.getHealth();
    const expected = 100;
    expect(actual).toBe(expected);
  })
  it('should be able to take damage', () => {
    const testHero = new Hero('Test');
    testHero.takeDamage(10);
    const actual = testHero.getHealth();
    const expected = 90;
    expect(actual).toBe(expected);
  })
  it('should have the correct name', () => {
    const testHero = new Hero('Test');
    const actual = testHero.getName();
    const expected = 'Test';
    expect(actual).toBe(expected);
  })
})
