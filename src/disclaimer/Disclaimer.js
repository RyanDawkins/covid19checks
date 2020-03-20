import React from 'react'
import './Disclaimer.css'

export default class Disclaimer extends React.Component {
    render() {
        return (
            <div className="alert alert-warning">
                <p>
                    <svg className="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
                        <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/>
                    </svg>

                    This calculation does no guarantee a payout. This is exclusively a projection based on the <a target="_blank" rel="noopener noreferrer" href="https://www.npr.org/2020/03/19/818253789/congress-awaits-gop-relief-plan-as-first-lawmakers-test-positive-for-coronavirus">NPR article of the bill propsed on 3/19/2020.</a>
                </p>
            </div>
        )
    }
}