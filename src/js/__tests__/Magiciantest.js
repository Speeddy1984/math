import Magician from "../Magician";

test("Magician set attack", () => {
  const magician = new Magician();
  magician.attack = 50;
  expect(magician._attack).toEqual(50);
});

test("Magician with distance > 1 and w/o stoned", () => {
  const magician = new Magician();
  magician.distance = 2;
  expect(magician.attack).toEqual(90);
});

test("Magician with distance > 1 and with stoned", () => {
  const magician = new Magician();
  magician.stoned = true;
  magician.distance = 2;
  expect(magician.attack).toEqual(85);
});

test("Magician with distance = 1 and w/o stoned", () => {
  const magician = new Magician();
  magician.distance = 1;
  expect(magician.attack).toEqual(100);
});

test("Magician with distance = 1 and with stoned", () => {
  const magician = new Magician();
  magician.stoned = true;
  magician.distance = 1;
  expect(magician.attack).toEqual(100);
});
