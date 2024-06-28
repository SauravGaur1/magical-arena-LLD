class CommonConfig {
    DEFAULT_PLAYER_HEALTH = 100;
    DEFAULT_PLAYER_STRENGTH = 20;
    DEFAULT_PLAYER_ATTACK = 10;
}

const commonConfig = new CommonConfig();
Object.freeze(commonConfig);

module.exports = commonConfig;