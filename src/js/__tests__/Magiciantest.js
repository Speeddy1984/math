import Magician from "../Magician";

test("Magician with distance > 1 and w/o stoned", () => {
  const magician = new Magician();
  magician.attack = 2;
  expect(magician.attack).toEqual(90);
});

test("Magician with distance > 1 and with stoned", () => {
  const magician = new Magician();
  magician.stoned = true;
  magician.attack = 2;
  expect(magician.attack).toEqual(85);
});

test("Magician with distance = 1 and w/o stoned", () => {
  const magician = new Magician();
  magician.attack = 1;
  expect(magician.attack).toEqual(100);
});

test("Magician with distance = 1 and with stoned", () => {
  const magician = new Magician();
  magician.stoned = true;
  magician.attack = 1;
  expect(magician.attack).toEqual(100);
});
