class GuessingGame {
    constructor() {
    	this.high = 0;
    	this.low = 0;
    	this.mid = 0;
    }

    setRange(min, max) {
    	this.high = max;
    	this.low = min;
    	this.mid = this.low + (this.low + this.high) / 2;
    }

    guess() {
    	this.mid = Math.round( (this.low + this.high) / 2 );
    	return this.mid;
    }

    lower() {
    	this.high = this.mid - 1;
    }

    greater() {
    	this.low = this.mid + 1;
    }
}

module.exports = GuessingGame;