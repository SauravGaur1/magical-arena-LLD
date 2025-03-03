const commonConfig = require("../config/common.config");

// USED - Builder Design Pattern here to make the initilizations of objects more readable :-: for result -> check at index.js entry point file //

class Player {

    #health;
    #strength;
    #attack;
    #name;

    constructor(_name, _health, _strength, _attack,) {
        this.#health = _health ?? commonConfig.DEFAULT_PLAYER_HEALTH;
        this.#strength = _strength ?? commonConfig.DEFAULT_PLAYER_STRENGTH;
        this.#attack = _attack ?? commonConfig.DEFAULT_PLAYER_ATTACK;
        this.#name = _name ?? `${this.#health}-${this.#strength}-${this.#attack}`;
        return this;
    }

    // setters

    setHealth(_health) {
        this.#health = _health;
        return this;
    }

    setStrength(_strength) {
        this.#strength = _strength;
        return this;
    }

    setAttack(_attack) {
        this.#attack = _attack;
        return this;
    }

    setName(_name) {
        this.#name = _name;
        return this;
    }

    // getters

    get health() {
        return this.#health;
    }

    get strength() {
        return this.#strength;
    }

    get attack() {
        return this.#attack;
    }

    get name() {
        return this.#name;
    }

    // game features

    get isAlive() {
        return this.#health > 0;
    }

    takeDamage(_damage) {
        this.#health -= _damage;
        if(!this.isAlive) {
            this.#health = 0; //dead
        }
    }

    calcDefence(_boosterDice) {
        const _defence = this.#strength * _boosterDice;
        return _defence;
    }

    calcDamage(_boosterDice) {
        const _attack = this.#attack * _boosterDice;
        return _attack;
    }

}

module.exports = Player;