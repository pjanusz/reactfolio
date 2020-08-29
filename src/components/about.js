import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class About extends Component {
    render() {
        const about = this.props.about;
        return (
            <section id="about" className="section">
                <Container className="my-auto p-0 mx-auto col-10 col-md-8 col-xl-6">
                    <Jumbotron>
                        {about}
                    </Jumbotron>
                </Container>
            </section>
        )
    }
}

export default About;