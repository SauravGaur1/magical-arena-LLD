const { appendFile } = require('fs');
const path = require('path');

/// All the new strategies for loger should be defined here with another static method ///

class LogStrategy {

    static withDate(timeStamp, message) {
        console.log(`${timeStamp} - ${message}`);
    }

    static toFile(timeStamp, message) {
        const filename = path.join(__dirname, 'data/logs.txt');
        appendFile(filename, `${message}\n` , error => {
            if(error){
                console.log('Error Writing to file' + error.message);   
            }
        })
    }

    static toConsole(timeStamp, message) {
        console.log(message);
    }

    static none() {

    }

}

module.exports = LogStrategy;