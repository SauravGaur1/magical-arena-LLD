const commonConfig = require('../config/common.config');

class Dice {

    static #sides = commonConfig.DEFAULT_DICE_SIDES;

    static roll() {
        return (Math.floor(Math.random() * Dice.#sides) + 1);
    }
}

module.exports = Dice;