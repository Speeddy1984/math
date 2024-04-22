import Magician from "../Magician";

test("Magician with distance > 1 and w/o stoned", () => {
  const magician = new Magician();
  expect(magician.getAttack(2)).toEqual(90);
});

test("Magician with distance > 1 and with stoned", () => {
  const magician = new Magician();
  magician.setStoned(true);
  expect(magician.getAttack(2)).toEqual(85);
});

test("Magician with distance = 1 and with stoned", () => {
  const magician = new Magician();
  magician.setStoned(true);
  expect(magician.getAttack(1)).toEqual(100);
});

test("Magician with distance = 1 and w/o stoned", () => {
  const magician = new Magician();
  expect(magician.getAttack(1)).toEqual(100);
});

test("Set stoned", () => {
  const magician = new Magician();
  magician.setStoned(true);
  expect(magician.getStoned(true)).toEqual(true);
});
