const Palindrome = require('./numeric-palindrome')

describe("Numeric Palindrome", () => {
    it("should be initialised with any input type",
        () => {
            const palindromInstances = [
                new Palindrome("abc"),
                new Palindrome(),
                new Palindrome(1),
                new Palindrome({})
            ]

            palindromInstances.forEach(instance => expect(instance).toBeDefined())
        }
    );
    it("should be able to manage it's state", () => {
        const palindromeOne = new Palindrome('1')
        const palindromeTwo = new Palindrome()
        const palindromeThree = new Palindrome(1)

        expect(palindromeOne).toHaveProperty("data", "1")
        expect(palindromeTwo).toHaveProperty("data", "")
        expect(palindromeThree).toHaveProperty("data", 1)
    })
    it("validation method should be defined", () => {
        const palindrome = new Palindrome()

        expect(palindrome.isValid()).toBeDefined()
    })
    it("return false if data is not numeric", () => {
        const notNumeric = [new Palindrome("a"), new Palindrome(), new Palindrome({})]

        notNumeric.forEach(x => expect(x.isValid()).toBeFalsy())
    })
    it("return false if negative number", () => {
        const negativeNumber = new Palindrome(-1)

        expect(negativeNumber.isValid()).toBeFalsy()
    })
    it("return false if data is 10 devidable", () => {
        const tenDivision = [new Palindrome(10), new Palindrome(20), new Palindrome(150)]

        tenDivision.forEach(sample => expect(sample.isValid()).toBeFalsy())
    })
    it("return true if data is smaller then 10", () => {
        const underTen = [new Palindrome(1), new Palindrome(2), new Palindrome(9)]

        underTen.forEach(sample => expect(sample.isValid()).toBeTruthy())
    })
    it("return false if not legal palindrome", () => {
        const invalidPalindromes = [new Palindrome(1112), new Palindrome(112), new Palindrome(12)]

        invalidPalindromes.forEach(sample => expect(sample.isValid()).toBeFalsy())
    })
    it("return true if legal palindrome", () => {
        const validPalindromes = [new Palindrome(111), new Palindrome(11), new Palindrome(1)]

        validPalindromes.forEach(sample => expect(sample.isValid()).toBeTruthy())
    })
})
