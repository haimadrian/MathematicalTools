import React from 'react';
import MessageBox, {
    ERROR
} from '../../utils/message-box';
import { euclideanAlgorithm } from '../../../model/actions/euclidean-algorithm';
import './index.css';

/**
 * A class responsible for extended Euclid's algorithm view<br/>
 * Uses the logic at euclidean-algorithm.js file
 */
export default class EuclideanAlgorithmForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: '', // a, of gcd(a, b)
            b: '', // b, of gcd(a, b)
            gcd: '', // The gcd value
            u: '', // multiplier of a, according to Bezout
            v: '', // multiplier of b, according to Bezout
            messageType: '', // error
            message: '',
            calculationSteps: ''
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
            calculationSteps: 'Error: ' + message
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
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /**
     * Calculate gcd(a, b), u and v, when user presses "Go" button or Enter inside one of the inputs
     * @param e
     * @returns {Promise<void>}
     */
    handleSubmit = async (e) => {
        let a = Number(this.state.a);
        let b = Number(this.state.b);

        console.log('Input: a=', a, ', b=', b);

        let result = euclideanAlgorithm(a, b);
        console.log(result)

        if (typeof result === 'string' || result instanceof String) {
            this.showMessageBox(ERROR, result);
        } else {
            this.setState({
                u: result.u,
                v: result.v,
                gcd: result.value,
                calculationSteps: result.calculationSteps
            });
        }
    }

    render() {
        return (
            <React.Fragment> {
                <div className="euclidean-algorithm-panel">
                    <div className="title">Extended Euclid's Algorithm: gcd(a, b) = au + bv</div>
                    <div className="wrapper">
                        <label className="content">
                            Enter a and b for calculating gcd(a, b), u, and v in order to have the form gcd(a, b)=au+bv (Bezout)<br/>
                            Note that the algorithm uses absolute, for working with positive numbers, and it makes sure a is the greater one,
                            hence you must see the latest answer and use u,v accordingly. We swap between u and v, and multiply by -1 if
                            it is necessary. Yet you must make sure it was fine.
                        </label>
                        <label>
                            a:
                            <input name="a"
                                   type="number"
                                   value={this.state.a}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit()}}}
                            />
                        </label>
                        <label>
                            b:
                            <input name="b"
                                   type="number"
                                   value={this.state.b}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit()}}}
                            />
                        </label>
                        <label className="actions">
                            <div className="execute-button" onClick={this.handleSubmit}>
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