import React, {Component} from 'react';

class Contact extends Component {
    render() {
        const contact = this.props.contact;
        return (
            <section id="contact" className="display-height">
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Pff {contact}
                </a>
            </section>
        )
    }
}

export default Contact;