import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class Projects extends Component {
    render() {
        const projects = this.props.projects;
        return (
            <section id="projects" className="section">
                <Container className="my-auto p-0 mx-auto col-10 col-md-8 col-xl-6">
                    <Jumbotron>
                        {projects}
                    </Jumbotron>
                </Container>
            </section>
        )
    }
}

export default Projects;