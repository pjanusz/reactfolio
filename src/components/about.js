import React, {Component} from 'react';
import logo from '../logo.svg';

class About extends Component {
    render() {
        const about = this.props.about;
        return (
            <section id="about" className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Pff {about}
                </a>
            </section>
        )
    }
}

export default About;