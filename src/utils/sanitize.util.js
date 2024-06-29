/// All Data Validations or input validations should be handled or Sanitized here ///

class Sanitize {

    static isEmpty(_atom) {
        return (_atom == null || _atom == undefined);
    }

    static isValidPlayerPower(_atom) {
        return (typeof _atom == "number" && _atom > 0);
    }

}

module.exports = Sanitize;