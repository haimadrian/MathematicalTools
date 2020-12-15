import React from 'react';
import MessageBox, {
    ERROR
} from '../../utils/message-box';
import { solveEquation, solveEquations } from '../../../model/actions/modular-equations';
import './index.css';

/**
 * A class responsible for Modular Equations solving
 */
export default class ModularEquationsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equations: ['ax \u2261 b (mod n)', 'x \u2261 b (mod n)', 'x \u2261 b (mod n)'], // Array of strings, containing equations
            value: '', // The result value. (x)
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
     * Whenever there is a change in any equation row input, we keep the values inside state
     * @param index Row index, to know which value to update
     * @param event ChangeEvent, to get the target input from
     */
    handleInputChange(index, event) {
        const target = event.target;
        const value = target.value;

        let equations = [...this.state.equations];
        equations[index] = value;
        this.setState({ equations: equations });
    }

    /**
     * Calculate Phi(n)
     * @param event
     * @returns {Promise<void>}
     */
    handleSubmit = async (event) => {
        const target = event.target;
        let equations = this.state.equations;
        console.log('Input: equations=', equations, ', action=', target.id);

        if (equations.length === 1) {
            let result = solveEquation(equations[0]);
            console.log(result)

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                let answer;
                if (result.values[0] === -1) {
                    answer = 'No answer.';
                } else {
                    answer = 'Answer:\n';
                    for (let i = 0; i < result.values.length; i++) {
                        answer += 'x' + i + ' \u2261 ' + result.values[i] + ' (mod ' + result.n + ')\n';
                    }
                }

                this.setState({
                    value: result.values.toString(),
                    calculationSteps: answer + 'Check steps below:\n\n' + result.calculationSteps
                });
            }
        } else {
            let result = solveEquations(equations);
            console.log(result)

            if (typeof result === 'string' || result instanceof String) {
                this.showMessageBox(ERROR, result);
            } else {
                let answer = 'Answer: x \u2261 ' + result.value + ' (mod ' + result.m + '). ';

                this.setState({
                    value: result.value,
                    calculationSteps: answer + 'Check steps below:\n\n' + result.calculationSteps
                });
            }
        }
    }

    /**
     * Adds an equation to the form.
     */
    addEquation() {
        this.setState(prevState => ({ equations: [...prevState.equations, 'x \u2261 b (mod n)']}))
    }

    /**
     * Removes the equation at the specified row index
     * @param index The row index of equation user selected to remove
     */
    removeEquation(index) {
        let equations = [...this.state.equations];
        equations.splice(index,1);
        this.setState({ equations: equations });
    }

    render() {
        return (
            <React.Fragment> {
                <div className="modular-equations-algorithm-panel">
                    <div className="title">Modular Equations</div>
                    <div className="wrapper">
                        <label className="content">
                            Enter an equation for calculating x. You can add as many equations as you need by using the + button<br/>
                            For example, enter 3x=1(mod6), or 3x≡3(mod6).
                        </label>
                        {
                            // Dynamic rows, to let user add or remove equations
                            this.state.equations.map((equation, i) =>
                                <label className="actions">
                                    <div key={i}>
                                        <input type="text" value={equation||'x \u2261 b (mod n)'} onChange={this.handleInputChange.bind(this, i)} />
                                    </div>
                                    <div className="edit-button" id="remove" onClick={this.removeEquation.bind(this, i)}>-</div>
                                    {   // In case there is a message to display, pop it up
                                        i === (this.state.equations.length - 1) ?
                                            <div className="edit-button" id="add" onClick={this.addEquation.bind(this, i)}>+</div> : null
                                    }
                                </label>
                            )
                        }
                        <label className="actions">
                            <div className="execute-button" id="calculate" onClick={this.handleSubmit}>
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