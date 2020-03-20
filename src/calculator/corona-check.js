const SINGLE = {
    baseAmount: 1200,
    maxIncomeForFullPayout: 75000,
    minIncomeForPayout: 2500,
    minimumPayout: 1200
}

const MARRIED = {
    baseAmount: 2400,
    maxIncomeForFullPayout: 150000,
    minIncomeForPayout: 2500,
    minimumPayout: 600
}

const DEDUCTION_PER_INCREMENT = 5
const INCREMENT = 100

export default class CoronaCheck {

    /**
     * @param {number} income 
     * @param {boolean} isMarried 
     */
    constructor(income, isMarried) {
        this._income = income
        this._isMarried = isMarried
    }

    /**
     * @returns {number} payout based on income and marital status
     */
    calculatePayout() {
        const maritalValues = this._getMaritalValues()
        const payout = maritalValues.baseAmount - this._getDeductionOffset(maritalValues.maxIncomeForFullPayout)
        return payout < 0 ? 0 : payout
    }

    _getMaritalValues() {
        return this.isMarried() ? MARRIED : SINGLE
    }

    _getDeductionOffset(maxIncomeForFullPayout) {
        if (this.getIncome() <= maxIncomeForFullPayout) return 0
        return Math.round(((this.getIncome() - maxIncomeForFullPayout) / INCREMENT) * DEDUCTION_PER_INCREMENT)
    }

    /**
     * @param {number} income
     * @returns {CoronaCheck} new instance with a different income
     */
    changeIncome(income) {
        return new CoronaCheck(income, this.isMarried())
    }

    /**
     * @param {boolean} isMarried true if married, false if single
     * @returns {CoronaCheck} new instance with a different marital status
     */
    changeMaritalStatus(isMarried) {
        return new CoronaCheck(this.getIncome(), isMarried)
    }

    /**
     * @returns {boolean} true if married, false if single
     */
    isMarried() {
        return this._isMarried
    }

    /**
     * @returns {number} income in USD
     */
    getIncome() {
        return this._income
    }

}