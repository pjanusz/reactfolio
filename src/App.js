import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Navi from './components/navi';
import Start from './components/start';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

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
      if (window.pageYOffset === 0) {
        $('.navi').css('backgroundColor', 'rgba(0, 0, 0, 0.30)');
      } else if (window.pageYOffset >= min && window.pageYOffset < max) {
        $('.navi').css('backgroundColor', `rgba(0, 0, 0, ${0.3 + window.pageYOffset*0.0015})`);
      } else {
        $('.navi').css('backgroundColor', 'rgba(0, 0, 0, 1)');
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
