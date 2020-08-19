import React, {Component} from 'react';
import logo from '../logo.svg';

class Start extends Component {
    render() {
        const start = this.props.start;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Pff {start}
            </a>
            </header>
        )
    }
}

export default Start;