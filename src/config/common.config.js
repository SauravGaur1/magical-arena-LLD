const Lang = require('./lang.config');

// USED - Singleton Design Pattern here as only single Object is needed all over the project //

class CommonConfig {
    // Player
    DEFAULT_PLAYER_HEALTH = 100;
    DEFAULT_PLAYER_STRENGTH = 20;
    DEFAULT_PLAYER_ATTACK = 10;

    // DICE
    DEFAULT_DICE_SIDES = 6;

    strategies = {
        toConsole : Lang.toConsole,
        toFile : Lang.toFile,
        withDate: Lang.withDate,
        default: Lang.toConsole,
    }
}

const commonConfig = new CommonConfig();
Object.freeze(commonConfig); // to make the object immutable

module.exports = commonConfig;