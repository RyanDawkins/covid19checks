import React from 'react'
import i18n from '../i18n'
import { withTranslation } from 'react-i18next'

class LanguageSwitcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = { language: 'en' }

        this.handleSwitch = this.handleSwitch.bind(this)
    }

    handleSwitch(event) {
        const newLanguage = this.state.language === 'en' ? 'es' : 'en'
        this.setState({
            ...this.state,
            language: newLanguage
        })
        i18n.changeLanguage(newLanguage)
    }

    render() {
        const { t } = this.props
        return (
            <div className="container-fluid">
                <button type="button" className="btn btn-primary" onClick={this.handleSwitch}>{ t('languageMessage') }</button>
            </div>
        )
    }
}

export default withTranslation()(LanguageSwitcher)