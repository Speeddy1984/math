import Daemon from "../Daemon";

test("Daemon with distance > 1 and w/o stoned", () => {
  const daemon = new Daemon();
  daemon.attack = 2;
  expect(daemon.attack).toEqual(90);
});

test("Daemon with distance > 1 and with stoned", () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.attack = 2;
  expect(daemon.attack).toEqual(85);
});

test("Daemon with distance = 1 and w/o stoned", () => {
  const daemon = new Daemon();
  daemon.attack = 1;
  expect(daemon.attack).toEqual(100);
});

test("Daemon with distance = 1 and with stoned", () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.attack = 1;
  expect(daemon.attack).toEqual(100);
});