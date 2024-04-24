import Character from "./app";

export default class Daemon extends Character {
  getAttack(distance) {
      if (this.stoned) {
          return this.calculateStonedAttack(distance);
      } else {
          return this.calculateAttack(distance);
      }
  }
}