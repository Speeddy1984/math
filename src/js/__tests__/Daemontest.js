import Daemon from "../Daemon";

test("Daemon with distance > 1 and w/o stoned", () => {
  const daemon = new Daemon();
  expect(daemon.getAttack(2)).toEqual(90);
});

test("Daemon with distance > 1 and with stoned", () => {
  const daemon = new Daemon();
  daemon.setStoned(true);
  expect(daemon.getAttack(2)).toEqual(85);
});

test("Daemon with distance = 1 and with stoned", () => {
  const daemon = new Daemon();
  daemon.setStoned(true);
  expect(daemon.getAttack(1)).toEqual(100);
});

test("Daemon with distance = 1 and w/o stoned", () => {
  const daemon = new Daemon();
  expect(daemon.getAttack(1)).toEqual(100);
});

test("Set stoned", () => {
  const daemon = new Daemon();
  daemon.setStoned(true);
  expect(daemon.getStoned(true)).toEqual(true);
});
