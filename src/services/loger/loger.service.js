const LogStrategy = require("./logStrategy.js");
const config = require('../../config/common.config');

// USED - Singleton Design Pattern here as only single Object is needed all over the project //
// USED - Strategy Design Pattern here for better maintainability and further addition of loging methods like cloud or something becomes very easier //

class Logger { 

    strategy;

    constructor(strategy) {
        this.logs = [];
        this.strategy = LogStrategy[strategy];
    }

    count() {
        return this.logs.length;
    }

    log(message) {
        let timeStamp = Date.now();
        const str = `${message}`;
        this.logs.push(str);
        this.strategy(timeStamp,message);
    }

    changeStrategy(newStrategy) {
        this.strategy = LogStrategy[newStrategy];
    }

}

module.exports = new Logger(config.strategies.default);