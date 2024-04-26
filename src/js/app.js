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

  set attack(distance) {
      this.distance = distance;
  }

  get stoned() {
      return this._stoned;
  }

  set stoned(value) {
      this._stoned = value;
  }
  
  calculateAttack(distance) {
      return this._attack * (1 - (distance - 1) * 0.1);
  }

  calculateStonedAttack(distance) {
      const baseAttack = this.calculateAttack(distance);
      const stoneValue = Math.log2(distance) * 5;
      return baseAttack - stoneValue;
  }
}
