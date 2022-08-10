class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = arguments[0];
        this.max = arguments[1];
    }

    guess() {
        this.result = Math.ceil((this.max - this.min) / 2) + this.min;;
        return this.result;
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;