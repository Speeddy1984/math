import Character from "./app";

export default class Daemon extends Character {
  constructor() {
    super();
    this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(stoned) {
    this.stoned = stoned;
  }

  getAttack(distance) {
    if (this.stoned) {
      return this.calculateStonedAttack(super.getAttack(), distance);
    } else {
      return this.calculateAttack(super.getAttack(), distance);
    }
  }

  calculateAttack(baseAttack, distance) {
    if (distance === 1) {
      return baseAttack;
    } else {
      return baseAttack * (1 - (distance - 1) * 0.1);
    }
  }

  calculateStonedAttack(baseAttack, distance) {
    if (distance === 1) {
      return baseAttack;
    } else {
      return (
        baseAttack * (1 - (distance - 1) * 0.1 - Math.log2(distance) * 0.05)
      );
    }
  }
}
