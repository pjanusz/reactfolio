import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class About extends Component {
    render() {
        const about = this.props.about;
        return (
            <section id="about" className="section">
                <Jumbotron>
                    {about}
                </Jumbotron>
            </section>
        )
    }
}

export default About;