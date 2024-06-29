class Future {
    static async delay(_milliseconds) {
        return await new Promise((resolve, _) => {
            setTimeout(resolve, _milliseconds);
        });
    }
}

module.exports = Future;