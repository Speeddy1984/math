import Character from "../app"

test('get/set attack working correctly', () => {
  const character = new Character();
  character.attack = 95;
  expect(character.attack).toEqual(95);
});