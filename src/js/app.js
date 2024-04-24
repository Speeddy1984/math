export default class Character {
  constructor(attack = 100) {
      this._attack = attack;
      this._stoned = false;
  }

  get attack() {
      return this._attack;
  }

  set attack(value) {
      this._attack = value;
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
