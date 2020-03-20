import React from 'react'
import { withTranslation } from 'react-i18next'

import './IncomeForm.css';
import CoronaCheck from './corona-check';

class IncomeForm extends React.Component {
    constructor(props) {
        super(props)
        this.check = new CoronaCheck(0, false)
        this.state = { income: undefined, isMarried: this.check.isMarried(), payout: this.check.calculatePayout() }

        this.handleMaritalStatusChange = this.handleMaritalStatusChange.bind(this)
        this.handleIncomeChange = this.handleIncomeChange.bind(this)
    }

    handleIncomeChange(event) {
        this.check = this.check.changeIncome(event.target.value)
        this.setState({
            ...this.state,
            income:event.target.value,
            payout: this.check.calculatePayout()
        })
    }

    handleMaritalStatusChange(event) {
        const isMarried = event.target.value === 'true'
        this.check = this.check.changeMaritalStatus(isMarried)
        this.setState({
            ...this.state,
            isMarried: isMarried,
            payout: this.check.calculatePayout()
        })
    }

    render() {
        const { t } = this.props
        return (
            <div className="IncomeForm">
                <form>
                    <fieldset>
                        <label htmlFor="income">{t('income')}</label><br />
                        <input id="income" type="number" value={this.state.income} onChange={this.handleIncomeChange} placeholder={t('income')}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="maritalStatus">{t('maritalStatus')}</label><br />
                        <input id="maritalStatus" type="radio" 
                            value={true}
                            checked={this.state.isMarried}
                            onChange={this.handleMaritalStatusChange} />
                        {t('yes')}
                        <input id="maritalStatus" type="radio" 
                            value={false}
                            checked={!this.state.isMarried}
                            onChange={this.handleMaritalStatusChange} />
                        {t('no')}
                    </fieldset>
                </form>
                <p>{t('expectedPayout')}: ${this.state.payout}</p>
            </div>
          );
    }
}

export default withTranslation()(IncomeForm);
