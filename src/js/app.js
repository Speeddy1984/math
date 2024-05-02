export default class Character {
  constructor(attack = 100) {
    this._attack = attack;
    this._stoned = false;
  }

  get attack() {
    if (this.stoned) {
      return this.calculateStonedAttack(this.distance);
    } else {
      return this.calculateAttack(this.distance);
    }
  }

  set attack(attack) {
    this._attack = attack;
  }

  get distance() {
    return this._distance;
  }

  set distance(distance) {
    this._distance = distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  calculateAttack(_distance) {
    return this._attack * (1 - (_distance - 1) * 0.1);
  }

  calculateStonedAttack(_distance) {
    const baseAttack = this.calculateAttack(_distance);
    const stoneValue = Math.log2(_distance) * 5;
    return baseAttack - stoneValue;
  }
}
