import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';

class Navi extends Component {
    render() {

        if (this.props.navi) {
            var start = this.props.navi.start;
            var about = this.props.navi.about;
            var projects = this.props.navi.projects;
            var contact = this.props.navi.contact;
        }

        return (
            <Nav className="navi">
                <Nav.Item>
                    <Link
                        to="start"
                        activeClass="active"
                        spy={true}
                        smooth={true}>
                        {start}
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}>
                        {about}
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        to="projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}>
                        {projects}
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        to="contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}>
                        {contact}
                    </Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navi;