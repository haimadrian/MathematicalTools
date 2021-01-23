import React from 'react';
import MessageBox, {
    ERROR
} from '../../utils/message-box';
import { gcd } from '../../../model/actions/gcd';
import { lcm, GCD_ALG_TYPE, PRIME_FACTORS_ALG_TYPE } from '../../../model/actions/lcm';
import { primeFactors } from '../../../model/actions/prime-factors';
import './index.css';

/**
 * A class responsible for gcd (Euclid's algorithm), lcm and prime factors algorithms<br/>
 * Uses the logic at gcd-lcm-prime-factors.js file
 */
export default class GcdLcmForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: '', // a, of gcd(a, b)
            b: '', // b, of gcd(a, b)
            algType: GCD_ALG_TYPE, // When user wants to run lcm, he can select whether to use gcd or prime-factors
            value: '', // The gcd/lcm value
            messageType: '', // error
            message: '',
            calculationSteps: '', // Steps for exam
            explanation: '' // Additional explanation, explaining the steps
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
     * Whenever there is a change in a or b inputs, we keep the values inside state
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
     * Calculate gcd(a, b), u and v, when user presses "Go" button or Enter inside one of the inputs
     * @param event
     * @returns {Promise<void>}
     */
    handleSubmit = async (event) => {
        const target = event.target;
        let a = Number(this.state.a);
        let b = Number(this.state.b);
        console.log('Input: a=', a, ', b=', b, ', algType=', this.state.algType, ', action=', target.id);

        if (target.id === 'gcd' || target.id === 'lcm') {
            let result;
            if (target.id === 'gcd') {
                result = gcd(a, b);
            } else {
                result = lcm(a, b, this.state.algType);
            }
            console.log(result)

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                this.setState({
                    value: result.value,
                    calculationSteps: result.calculationSteps,
                    explanation: result.explanation + '\n'
                });
            }
        } else {
            let result = primeFactors(a);

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                this.setState({
                    calculationSteps: a + ' = ' + (a < 0 ? '-1 * ' : '') + result.factors.join(' * '),
                    explanation: ''
                });
            }
        }
    }

    render() {
        return (
            <React.Fragment> {
                <div className="gcdlcm-algorithm-panel">
                    <div className="title">gcd(a, b), lcm(a, b), and prime-factors</div>
                    <div className="wrapper">
                        <label className="content">
                            Enter a and b for calculating gcd(a, b), or lcm(a, b), or primeFactors(a)<br/>
                            gcd uses Euclid's algorithm, where we show the steps, explanation and iterations count.<br/>
                            lcm can use gcd or prime-factors techniques, depends on your selection for algorithm type.<br/>
                            primeFactors will let you see the factorization of a number using its prime factors.
                        </label>
                        <label>
                            a:
                            <input name="a"
                                   type="number"
                                   value={this.state.a}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label>
                            b:
                            <input name="b"
                                   type="number"
                                   value={this.state.b}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label>
                            Algorithm to use for lcm(a, b) calculation:
                            <select name="algType"
                                    value={this.state.algType}
                                    onChange={this.handleInputChange}>
                                {[GCD_ALG_TYPE, PRIME_FACTORS_ALG_TYPE].map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <label className="actions">
                            <div className="execute-button" id="gcd" onClick={this.handleSubmit}>
                                gcd(a, b)
                            </div>
                            <div className="execute-button" id="lcm" onClick={this.handleSubmit}>
                                lcm(a, b)
                            </div>
                            <div className="execute-button" id="prime" onClick={this.handleSubmit}>
                                primeFactors(a)
                            </div>
                        </label>
                        <label>Output:</label>
                        <textarea className="textarea" value={this.state.calculationSteps + '\n\n' + this.state.explanation} readOnly />
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