const SINGLE = {
    baseAmount: 1200,
    maxIncomeForFullPayout: 75000,
    minIncomeForPayout: 2500,
    minimumPayout: 600
}

const MARRIED = {
    baseAmount: 2400,
    maxIncomeForFullPayout: 150000,
    minIncomeForPayout: 2500,
    minimumPayout: 1200
}

const DEDUCTION_PER_INCREMENT = 5
const INCREMENT = 100
const PAYOUT_PER_CHILD = 500

export default class CoronaCheck {

    /**
     * @param {number} income 
     * @param {boolean} isMarried
     * @param {numberOfChildren} numberOfChildren
     */
    constructor(income, isMarried, numberOfChildren) {
        this._income = income
        this._isMarried = isMarried
        this._numberOfChildren = numberOfChildren
    }

    /**
     * @returns {number} payout based on income and marital status
     */
    calculatePayout() {
        return this._getIncomeBasedPayout() + this._calculateChildrenPayout()
    }

    _getIncomeBasedPayout() {
        const maritalValues = this._getMaritalValues()

        let payout = maritalValues.minimumPayout
        if (this._income > maritalValues.minIncomeForPayout) {
            payout = maritalValues.baseAmount - this._getDeductionOffset(maritalValues.maxIncomeForFullPayout)
        }

        return payout < 0 ? 0 : payout
    }

    _getMaritalValues() {
        return this._isMarried ? MARRIED : SINGLE
    }

    _calculateChildrenPayout() {
        return PAYOUT_PER_CHILD * this.getNumberOfChildren()
    }

    _getDeductionOffset(maxIncomeForFullPayout) {
        if (this._income <= maxIncomeForFullPayout) return 0
        return Math.round(((this._income - maxIncomeForFullPayout) / INCREMENT) * DEDUCTION_PER_INCREMENT)
    }

    /**
     * @param {number} income
     * @returns {CoronaCheck} new instance with a different income
     */
    changeIncome(income) {
        return new CoronaCheck(income, this._isMarried, this._numberOfChildren)
    }

    /**
     * @param {boolean} isMarried true if married, false if single
     * @returns {CoronaCheck} new instance with a different marital status
     */
    changeMaritalStatus(isMarried) {
        return new CoronaCheck(this._income, isMarried, this._numberOfChildren)
    }

    changeNumberOfChildren(numberOfChildren) {
        return new CoronaCheck(this._income, this._isMarried, numberOfChildren)
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

    /**
     * @returns {number} number of children
     */
    getNumberOfChildren() {
        return this._numberOfChildren || 0
    }

}