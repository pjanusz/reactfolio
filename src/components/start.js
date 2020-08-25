import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class Start extends Component {
    render() {

        if (this.props.start) {
            var me = this.props.start.me;
            var description = this.props.start.description;
            var sectionName = this.props.start.sectionName;
        }

        return (    
            <section className="start-section section" id={sectionName}>
                <Container className="my-auto">
                    <Jumbotron className="start-main">
                        <h1 className="text-center">{me}</h1>
                        <p className="text-center">{description}</p>
                        <div className="row"></div>
                    </Jumbotron>
                </Container>
            </section>
        )
    }
}

export default Start;