import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class Contact extends Component {
    render() {
        const contact = this.props.contact;
        return (
            <section id="contact" className="section" style={{backgroundImage: `url(${require('../../src/img/contact.jpg')})`}}>
                <Container className="my-auto p-0 mx-auto col-10 col-md-8 col-xl-6">
                    <Jumbotron className="jumbo">
                        {contact}
                    </Jumbotron>
                </Container>
            </section>
        )
    }
}

export default Contact;