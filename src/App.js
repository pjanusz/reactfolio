import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import Navi from './components/navi';
import Start from './components/start';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

library.add(fab);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  getData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: file => {
        this.setState(file);
      },
      error: (xhr, status, error) => {
        console.log(error);
        alert(error);
      }
    });
  }

  componentDidMount() {
    this.getData();
    window.onscroll = () => {
      console.log(window.pageYOffset);
      var min = 1;
      var max = 600;
      var step = 0.0015;
      var opacity = window.pageYOffset*step;
      if (window.pageYOffset === 0) {
        $('.navi-background').css('borderTop', '50px solid rgba(0, 0, 0, 0)');
      } else if (window.pageYOffset >= min && window.pageYOffset < max) {
        $('.navi-background').css('borderTop', `50px solid rgba(0, 0, 0, ${opacity})`);
      } else {
        $('.navi-background').css('borderTop', '50px solid rgba(0, 0, 0, 1)');
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navi navi={this.state.navi}></Navi>
        <Start start={this.state.start}></Start>
        <About about={this.state.about}></About>
        <Projects projects={this.state.projects}></Projects>
        <Contact contact={this.state.contact}></Contact>
      </div>
    );
  }
}

export default App;
