import { Character, Hero } from './';

describe('Solution: Character base class', () => {
  test('should be an object', () => {
    const actual = typeof new Character();
    const expected = 'object';
    expect(actual).toBe(expected);
  });
  test('should be able to get health', () => {
    const testChar = new Character();
    const health = testChar.getHealth();
    expect(health).toBe(100);
  });
  test('should be able to take damage', () => {
    const testChar = new Character();
    testChar.takeDamage(10);
    const health = testChar.getHealth();
    expect(health).toBe(90);
  });
});

describe('Solution: Hero extended class', () => {
  test('should be an object', () => {
    const actual = typeof new Hero();
    const expected = 'object';
    expect(actual).toBe(expected);
  });
  test('should be an instance of Character', () => {
    const instanceOfCharacter = new Hero('Test') instanceof Character;
    expect(instanceOfCharacter).toBeTruthy();
  });
  test('should be able to get health', () => {
    const testHero = new Hero('Test');
    const health = testHero.getHealth();
    expect(health).toBe(100);
  });
  test('should be able to take damage', () => {
    const testHero = new Hero('Test');
    testHero.takeDamage(10);
    const health = testHero.getHealth();
    expect(health).toBe(90);
  });
  test('should have the correct name', () => {
    const testHero = new Hero('Test');
    const name = testHero.getName();
    expect(name).toBe('Test');
  });
});
