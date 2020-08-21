import React, {Component} from 'react';

class Projects extends Component {
    render() {
        const projects = this.props.projects;
        return (
            <section id="projects" className="section">
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Pff {projects}
                </a>
            </section>
        )
    }
}

export default Projects;