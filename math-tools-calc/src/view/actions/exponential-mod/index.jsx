import React from 'react';
import MessageBox, {
    ERROR
} from '../../utils/message-box';
import { exponentialModulus } from '../../../model/actions/exponential-mod';
import './index.css';

/**
 * A class responsible for recursion solving<br/>
 * Uses the logic at recursion.js file
 */
export default class ExponentialModForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base: 1, // b, from b^e(mod m)
            exponent: 0, // e, from b^e(mod m)
            modulus: 1, // m, from b^e(mod m)
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
        const name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        });
    }

    /**
     * Calculate exponential modulus
     * @param event
     * @returns {Promise<void>}
     */
    handleSubmit = async (event) => {
        const target = event.target;
        let base = Number(this.state.base);
        let exponent = Number(this.state.exponent);
        let modulus = Number(this.state.modulus);
        console.log('Input: base=', base, ', exponent=', exponent, ', modulus=', modulus);

        let result = exponentialModulus(base, exponent, modulus);
        console.log(result)

        if (typeof result === 'string' || result instanceof String) {
            this.showMessageBox(ERROR, result);
        } else {
            this.setState({
                calculationSteps: result.calculationSteps
            });
        }
    }

    render() {
        return (
            <React.Fragment> {
                <div className="exponential-mod-algorithm-panel">
                    <div className="title">Exponential Mod</div>
                    <div className="wrapper">
                        <label className="content">
                            Enter base (b), exponent (e) and modulus (m) for calculating b^e(𝑚𝑜𝑑 m)<br/>
                            In case base and modulus are not co-prime numbers ( gcd(b, m)≠1 ) we will solve it directly by factorizing the exponent.<br/>
                            Otherwise, base and modulus are co-prime, we will check if m is a prime number, in order to use Fermat's little theorem
                            ( b^(m-1)≡1(𝑚𝑜𝑑 m) )
                            and if m is not a prime number, we will use Euler's theorem. ( b^φ(m)≡1(𝑚𝑜𝑑 m) )
                        </label>
                        <p align="left">Fermat: b<sup>m-1</sup> ≡ 1(𝑚𝑜𝑑 m) ,  m is prime, gcd(b,m)=1<br/>
                        Euler: b<sup>φ(m)</sup> ≡ 1(𝑚𝑜𝑑 m) ,  m is not prime, gcd(b,m)=1</p>
                        <label>
                            Base:
                            <input name="base"
                                   type="number"
                                   value={this.state.base}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label>
                            Exponent:
                            <input name="exponent"
                                   type="number"
                                   value={this.state.exponent}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label>
                            Modulus:
                            <input name="modulus"
                                   type="number"
                                   value={this.state.modulus}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label className="actions">
                            <div className="execute-button" id="go" onClick={this.handleSubmit}>
                                Go
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