import React from 'react';
import MessageBox, {
    ERROR
} from '../../utils/message-box';
import { eulerFunc, eulerFormula } from '../../../model/actions/euler';
import { gaussSum } from '../../../model/actions/gauss';
import './index.css';

/**
 * A class responsible for Euler function and formula<br/>
 * Uses the logic at euler.js file
 */
export default class EulerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: '', // n, of Phi(n)
            value: '', // The result value
            messageType: '', // error
            message: '',
            calculationSteps: '' // Steps for exam
        }

        this.showMessageBox = this.showMessageBox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Sets message type and a message to pop it up for the user
     * @param type Message type can be either info, warning, or error
     * @param message The message to display
     */
    showMessageBox(type, message) {
        this.setState({
            messageType: type,
            message: message,
            calculationSteps: 'Oh Fuck: ' + message
        });

        setTimeout(() => {
            this.setState({
                messageType: '',
                message: ''
            })
        }, 10000);
    }

    /**
     * Whenever there is a change in n inputs, we keep the values inside state
     * @param event ChangeEvent, to get the target input from
     */
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /**
     * Calculate Phi(n)
     * @param event
     * @returns {Promise<void>}
     */
    handleSubmit = async (event) => {
        const target = event.target;
        let n = Number(this.state.n);
        console.log('Input: n=', n, ', action=', target.id);

        if (target.id === 'eulerFunc') {
            let result = eulerFunc(n);
            console.log(result)

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                this.setState({
                    value: result.nums.length,
                    calculationSteps: 'Numbers: ' + result.nums + '\n(count=' + result.nums.length + ')\n\n' + result.calculationSteps
                });
            }
        } else if (target.id === 'eulerFormula') {
            let result = eulerFormula(n);

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                this.setState({
                    value: result.value,
                    calculationSteps: '\u03C6(' + n + ') = ' + result.value + '\n\n' + result.calculationSteps
                });
            }
        } else {
            let result = gaussSum(n);

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                this.setState({
                    calculationSteps: result.calculationSteps
                });
            }
        }
    }

    render() {
        return (
            <React.Fragment> {
                <div className="euler-algorithm-panel">
                    <div className="title">Euler Function and Formula</div>
                    <div className="wrapper">
                        <label className="content">
                            Enter n for calculating φ(n)<br/>
                            Press EulerFunc for getting the numbers below n where gcd(n, i) = 1.<br/>
                            Press EulerFormula for getting the amount of numbers in EulerFunc, with calculation steps according to Euler formula.
                        </label>
                        <label>
                            n:
                            <input name="n"
                                   type="number"
                                   value={this.state.n}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label className="actions">
                            <div className="execute-button" id="eulerFunc" onClick={this.handleSubmit}>
                                Euler Func
                            </div>
                            <div className="execute-button" id="eulerFormula" onClick={this.handleSubmit}>
                                Euler Formula
                            </div>
                            <div className="execute-button" id="gaussSum" onClick={this.handleSubmit}>
                                Gauss Sum
                            </div>
                        </label>
                        <label>Output:</label>
                        <textarea className="textarea" value={this.state.calculationSteps} readOnly />
                        {   // In case there is a message to display, pop it up
                            this.state.message ? <MessageBox type={ this.state.messageType }
                                                             message={this.state.message} /> : null
                        }
                    </div>
                </div>
            }
            </React.Fragment>
        )
    }
}