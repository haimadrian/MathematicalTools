import React from 'react';
import './index.css';

// Let outsiders to use these as messageType parameter, so we will have the right css used.
export const ERROR = 'error';
export const WARN = 'warning';
export const INFO = 'info';

/**
 * A class used as a popup where we display info / warning and error messages related to user input.
 */
export default class MessageBox extends React.Component {
    render() {
        return (
            <div className="message-box">
                <div className={' ' + this.props.type}>
                    <div className="message-box-title">
                        {   // Make sure first letter is capitalized
                            this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}:
                    </div>
                    <div className="message-box-content">
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
}