const commonConfig = require('../config/common.config');

class Dice {

    sides = commonConfig.DEFAULT_DICE_SIDES;

    static roll() {
        return (Math.floor(Math.random() * sides) + 1);
    }
}

module.exports = Dice;