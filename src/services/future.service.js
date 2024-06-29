/// Future class all the promises related methods should be handled here ///
/// Got this idea from Dart ///

class Future {
    static async delay(_milliseconds) {
        return await new Promise((resolve, _) => {
            setTimeout(resolve, _milliseconds);
        });
    }
}

module.exports = Future;