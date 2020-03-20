import React from 'react'
import { withTranslation } from 'react-i18next'

import './IncomeForm.css';
import CoronaCheck from './corona-check';

class IncomeForm extends React.Component {
    constructor(props) {
        super(props)
        this.check = new CoronaCheck(0, false, 0)
        this.state = { 
            income: 0, 
            isMarried: this.check.isMarried(),
            numberOfChildren: 0, 
            payout: this.check.calculatePayout()
        }

        this.handleMaritalStatusChange = this.handleMaritalStatusChange.bind(this)
        this.handleIncomeChange = this.handleIncomeChange.bind(this)
        this.handleNumberOfChildrenChange = this.handleNumberOfChildrenChange.bind(this)
    }

    handleIncomeChange(event) {
        const income = Number(event.target.value)
        this.check = this.check.changeIncome(income)
        this.setState({
            ...this.state,
            income: event.target.value,
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

    handleNumberOfChildrenChange(event) {
        const numberOfChildren = Number(event.target.value)
        this.check = this.check.changeNumberOfChildren(numberOfChildren)
        this.setState({
            ...this.state,
            numberOfChildren: event.target.value,
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
                        <input id="income" type="number"
                            value={this.state.income}
                            onChange={this.handleIncomeChange}
                            placeholder={t('income')}/>
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
                    <fieldset>
                        <label htmlFor="numberOfChildren">{t('howManyChildren')}</label><br />
                        <input id="numberOfChildren" type="number" 
                            value={this.state.numberOfChildren} 
                            onChange={this.handleNumberOfChildrenChange} 
                            placeholder={t('numberOfChildren')} />
                    </fieldset>
                </form>
                <p>{t('expectedPayout')}: ${this.state.payout}</p>
            </div>
          );
    }
}

export default withTranslation()(IncomeForm);
