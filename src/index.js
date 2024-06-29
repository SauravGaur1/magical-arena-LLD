const MagicalArena = require('./models/magicalArena.model');
const Player = require('./models/player.model');
const Logger = require('./services/loger/loger.service');
const commonConfig = require('./config/common.config');


/////ENTERY-POINT//////
class Main {

    static run() {

        const arena = new MagicalArena();

        const playerA = new Player()
            .setName("Saurav Gaur")
            .setHealth(100)
            .setAttack(20)
            .setStrength(10);  
        
        const playerB = new Player()
            .setName("Swiggy")
            .setHealth(120)
            .setAttack(10)
            .setStrength(20);  

        arena.startMatch(playerA, playerB);

    }

    ////// Change Logger Strategy to store logs in [toConsole, toFile] etc //////
    static changeLogerStrategy(_strategy) {
        Logger.changeStrategy(_strategy);
    }

}

Main.changeLogerStrategy(commonConfig.strategies.toConsole);
Main.run();