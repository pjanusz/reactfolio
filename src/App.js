import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Start from './components/start';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: file => {
        this.setState({data: file});
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
        <Start data={this.state.data.test}></Start>
      </div>
    );
  }
}

export default App;
