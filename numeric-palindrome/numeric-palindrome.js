class Palindrome {
    constructor(userInput = '') {
        this._data = userInput
    }

    get data() {
        return this._data
    }

    isValid() {
        if (!Number.isInteger(this._data)) {
            return false
        }

        if (this._data < 0) {
            return false
        }

        if (this._data % 10 === 0) {
            return false
        }

        if (this._data < 10) {
            return true
        }

        let leftPart = this.data
        let rightPart = 0

        while (leftPart > rightPart) {
            // reserve extra space for additional number
            rightPart *= 10
            // add the most right number
            rightPart += leftPart % 10
            // remove the most right number from the left-part
            leftPart = Math.trunc(leftPart / 10)
        }

        // compare left and right parts in case left and right part have equal number of digits
        // compare left and right parts in case right part has collected the digit in the middle
        return leftPart === rightPart || leftPart === Math.trunc(rightPart / 10)
    }
}

module.exports = Palindrome