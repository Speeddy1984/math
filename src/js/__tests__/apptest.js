import Character from "../app"

test('getAttack returns correct attack', () => {
  const character = new Character();
  character.setAttack(95);
  expect(character.getAttack()).toEqual(95);
});