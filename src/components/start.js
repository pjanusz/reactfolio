import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import {Link} from 'react-scroll';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

class Start extends Component {
    render() {

        if (this.props.start) {
            var me = this.props.start.me;
            var description = this.props.start.description;
            var sectionName = this.props.start.sectionName;
            var social = this.props.start.social.map(n => {
                return <div key={n.name}>
                            <a href={n.url} target="_blank" className="text-light" rel="noopener noreferrer">
                                <Icon icon={['fab', `${n.icon}`]} />
                            </a>
                        </div>
            });
        }

        return (    
            <section className="start-section section" style={{backgroundImage: `url(${require('../../src/img/start.jpg')})`}} id={sectionName}>
                <Container className="my-auto p-0 mx-auto col-10 col-md-8 col-xl-6">
                    <Jumbotron className="jumbo">
                        <h1 className="text-center">{me}</h1>
                        <p className="text-center">{description}</p>
                        <div id="social" className="row justify-content-around mx-auto mt-5 col-6">{social}</div>
                    </Jumbotron>
                </Container>
                <Link
                    to="about"
                    style={{width: `50px`, height: `50px`, lineHeight: `35px`}}
                    className="btn rounded-circle btn-light mb-5 text-center"
                    activeClass=""
                    spy={true}
                    smooth={true}>
                    V
                </Link>
            </section>
        )
    }
}

export default Start;