import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll';

class Start extends Component {
    render() {

        const start = this.props.start;
        
        return (
            <header id="start" className="App-header">
                <Nav>
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
                            About
                        </Link>
                    </Nav.Item>    
                </Nav>
            </header>
        )
    }
}

export default Start;