import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Start from './components/start';
import About from './components/about';

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
  }

  render() {
    return (
      <div className="App">
        <Start start={this.state.start}></Start>
        <About about={this.state.about}></About>
      </div>
    );
  }
}

export default App;
