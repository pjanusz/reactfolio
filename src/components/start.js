import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll';

class Start extends Component {
    render() {

        const start = this.props.start;
        
        return (
            <header id="start" className="section">
                <Nav className="nav">
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
                            O mnie
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="projects"
                            activeClass="active"
                            spy={true}
                            smooth={true}>
                            Projekty
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}>
                            Kontakt
                        </Link>
                    </Nav.Item>
                </Nav>
            </header>
        )
    }
}

export default Start;