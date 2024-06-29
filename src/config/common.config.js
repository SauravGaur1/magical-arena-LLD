class CommonConfig {
    // Player
    DEFAULT_PLAYER_HEALTH = 100;
    DEFAULT_PLAYER_STRENGTH = 20;
    DEFAULT_PLAYER_ATTACK = 10;

    // DICE
    DEFAULT_DICE_SIDES = 6;
}

const commonConfig = new CommonConfig();
Object.freeze(commonConfig);

module.exports = commonConfig;