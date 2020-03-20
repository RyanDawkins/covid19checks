import CoronaCheck from './corona-check'

const MARRIED = true
const SINGLE = false

describe('CoronaCheck', function () {

    describe('calculate', function () {

        it('should have base when single has below the max income', function () {
            const check = new CoronaCheck(74999, SINGLE, 0)
            expect(check.calculatePayout()).toBe(1200)
        })

        it('should have base when single has the max income', function () {
            const check = new CoronaCheck(75000, SINGLE, 0)
            expect(check.calculatePayout()).toBe(1200)
        })

        it('should deduct when single has above the max income', function() {
            const check = new CoronaCheck(75200, SINGLE, 0)
            expect(check.calculatePayout()).toBe(1190)
        })

        it('should have no payout when single and way above max income', function () {
            const check = new CoronaCheck(999999, SINGLE, 0)
            expect(check.calculatePayout()).toBe(0)
        })

        it('should have minimum payout when single with under 2500 income', function () {
            const check = new CoronaCheck(2499, SINGLE, 0)
            expect(check.calculatePayout()).toBe(600)
        })

        it('should have base when married has below the max income', function () {
            const check = new CoronaCheck(149999, MARRIED, 0)
            expect(check.calculatePayout()).toBe(2400)
        })

        it('should have base when married has the max income', function () {
            const check = new CoronaCheck(150000, MARRIED, 0)
            expect(check.calculatePayout()).toBe(2400)
        })

        it('should deduct when married has above the max income', function() {
            const check = new CoronaCheck(150200, MARRIED, 0)
            expect(check.calculatePayout()).toBe(2390)
        })

        it('should have no payout when married and way above max income', function () {
            const check = new CoronaCheck(999999, MARRIED, 0)
            expect(check.calculatePayout()).toBe(0)
        })

        it('should have minimum payout when married with under 2500 income', function () {
            const check = new CoronaCheck(2499, MARRIED, 0)
            expect(check.calculatePayout()).toBe(1200)
        })

        it('should also include payout for children', function () {
            const check = new CoronaCheck(150000, MARRIED, 2)
            expect(check.calculatePayout()).toBe(3400)
        })

        it('should not mutate when changing marital status', function () {
            const check = new CoronaCheck(150000, MARRIED, 0)
            check.changeMaritalStatus(SINGLE)

            expect(check.isMarried()).toBe(true)
        })

        it('should not mutate when changing income', function () {
            const check = new CoronaCheck(150000, MARRIED, 0)
            check.changeMaritalStatus(SINGLE)

            expect(check.getIncome()).toBe(150000)
        })

        it('should not mutate when changing number of children', function () {
            const check = new CoronaCheck(150000, MARRIED, 0)
            check.changeNumberOfChildren(3)

            expect(check.getNumberOfChildren()).toBe(0)
        })

        it('should change payout when changing marital status', function () {
            let check = new CoronaCheck(75200, SINGLE, 0)

            check = check.changeMaritalStatus(MARRIED)

            expect(check.calculatePayout()).toBe(2400)
        })

        it('should change payout when changing income', function () {
            let check = new CoronaCheck(75200, SINGLE, 0)

            check = check.changeIncome(75000)

            expect(check.calculatePayout()).toBe(1200)
        })

        it('should change number of children when changing number of children', function () {
            let check = new CoronaCheck(50000, MARRIED, 0)

            check = check.changeNumberOfChildren(3)

            expect(check.calculatePayout()).toBe(3900)
        })

        it('should respond to form how a user would use it', function () {

            let check = new CoronaCheck(0, false, 0)
            check = check.changeIncome(50000)
            check = check.changeMaritalStatus(true)
            check = check.changeNumberOfChildren(2)

            expect(check.calculatePayout()).toBe(3400)

        })

    })

})
