import React from 'react';
import MessageBox, {
    ERROR
} from '../../utils/message-box';
import { recursiveFunc } from '../../../model/actions/recursion';
import './index.css';

/**
 * A class responsible for recursion solving<br/>
 * Uses the logic at recursion.js file
 */
export default class RecursionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: '', // n, of f(n) - The length of strings to check
            contains: false, // Whether we check if a string contains, or not, some value
            value: '', // The value to check if it is contained in a string or not
            count: 0, // How many occurrences found
            alphabet: ['0', '1', '2'], // The alphabet to build strings from.
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
     * Whenever there is a change in n inputs, we keep the values inside state
     * @param event ChangeEvent, to get the target input from
     */
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        let value = target.value;
        if (value === 'contains') {
            value = true;
        } else if (value === 'not contains') {
            value = false;
        } else if (typeof value === 'string' || value instanceof String) {
            value = value.split(',');
        }

        this.setState({
            [name]: value
        });
    }

    /**
     * Count occurrences
     * @param event
     * @returns {Promise<void>}
     */
    handleSubmit = async (event) => {
        const target = event.target;
        let n = Number(this.state.n);
        console.log('Input: n=', n, ', action=', target.id);

        let result = recursiveFunc(n, this.state.alphabet, this.state.contains, this.state.value);
        console.log(result)

        if (typeof result === 'string' || result instanceof String) {
            this.showMessageBox(ERROR, result);
        } else {
            this.setState({
                count: result.count,
                calculationSteps: result.calculationSteps
            });
        }
    }

    render() {
        return (
            <React.Fragment> {
                <div className="recursion-algorithm-panel">
                    <div className="title">Recursion</div>
                    <div className="wrapper">
                        <label className="content">
                            Enter n for calculating f(n). n tells the length of a string. (depth of tree)<br/>
                            Fill in the alphabet, as a comma separated string. e.g. 0,1,2 or a,b,c etc.<br/>
                            Select whether you'd like to check if a string contains some value, or not contains it.<br/>
                            Fill in the value you want to check if it is contained in a string or not.
                        </label>
                        <label>
                            Alphabet:
                            <input name="alphabet"
                                   value={this.state.alphabet.join(',')}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
                        </label>
                        <label>
                            Contains or not:
                            <select name="contains"
                                    value={this.state.contains ? 'contains' : 'not contains'}
                                    onChange={this.handleInputChange}>
                                {['contains', 'not contains'].map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Value:
                            <input name="value"
                                   value={this.state.value}
                                   onChange={this.handleInputChange}
                                   required
                                   onKeyDown={(e) => {if (e.key === 'Enter') {this.handleSubmit(e)}}}
                            />
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