const LogStrategy = require("./logStrategy.js");
const config = require('../../config/common.config');

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