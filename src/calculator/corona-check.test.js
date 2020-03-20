import CoronaCheck from './corona-check'

const MARRIED = true
const SINGLE = false

describe('CoronaCheck', function () {

    describe('calculate', function () {

        it('should have base when single has below the max income', function () {
            const check = new CoronaCheck(74999, SINGLE)
            expect(check.calculatePayout()).toBe(1200)
        })

        it('should have base when single has the max income', function () {
            const check = new CoronaCheck(75000, SINGLE)
            expect(check.calculatePayout()).toBe(1200)
        })

        it('should deduct when single has above the max income', function() {
            const check = new CoronaCheck(75200, SINGLE)
            expect(check.calculatePayout()).toBe(1190)
        })

        it('should have no payout when single and way above max income', function () {
            const check = new CoronaCheck(999999, SINGLE)
            expect(check.calculatePayout()).toBe(0)
        })

        it('should have minimum payout when single with under 2500 income', function () {
            const check = new CoronaCheck(2499, SINGLE)
            expect(check.calculatePayout()).toBe(600)
        })

        it('should have base when married has below the max income', function () {
            const check = new CoronaCheck(149999, MARRIED)
            expect(check.calculatePayout()).toBe(2400)
        })

        it('should have base when married has the max income', function () {
            const check = new CoronaCheck(150000, MARRIED)
            expect(check.calculatePayout()).toBe(2400)
        })

        it('should deduct when married has above the max income', function() {
            const check = new CoronaCheck(150200, MARRIED)
            expect(check.calculatePayout()).toBe(2390)
        })

        it('should have no payout when married and way above max income', function () {
            const check = new CoronaCheck(999999, MARRIED)
            expect(check.calculatePayout()).toBe(0)
        })

        it('should have minimum payout when married with under 2500 income', function () {
            const check = new CoronaCheck(2499, MARRIED)
            expect(check.calculatePayout()).toBe(1200)
        })

        it('should not mutate when changing marital status', function () {
            const check = new CoronaCheck(150000, MARRIED)
            check.changeMaritalStatus(SINGLE)

            expect(check.isMarried()).toBe(true)
        })

        it('should not mutate when changing income', function () {
            const check = new CoronaCheck(150000, MARRIED)
            check.changeMaritalStatus(SINGLE)

            expect(check.getIncome()).toBe(150000)
        })

        it('should change payout when changing marital status', function () {
            let check = new CoronaCheck(75200, SINGLE)

            check = check.changeMaritalStatus(MARRIED)

            expect(check.calculatePayout()).toBe(2400)
        })

        it('should change payout when changing income', function () {
            let check = new CoronaCheck(75200, SINGLE)

            check = check.changeIncome(75000)

            expect(check.calculatePayout()).toBe(1200)
        })

    })

})
