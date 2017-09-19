import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideVisible: false,
      animation1: false,
      animation2: false
    }
    this.openSlide = this.openSlide.bind(this);
    this.animation1 = this.animation1.bind(this);
    this.animation2 = this.animation2.bind(this)
  }

  openSlide() {
    this.setState({
      slideVisible: !this.state.slideVisible
    })
  }

  animation1() {
    this.setState({
      animation1: !this.state.animation1
    })
  }
  animation2() {
    this.setState({
      animation2: !this.state.animation2
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Media Queries</h1>
        <nav className='nav'>
          <div className='myName'>Joe Blank</div> 
          <div className='links-wrap'>
            <div>Services</div> 
            <div>Portfolio</div>
            <div>About</div>
            <div>Team</div>
          </div>
          <button
          className='btn'
          onClick={ this.openSlide }
          >MENU</button>
        </nav> 
        <div className={this.state.slideVisible ? 'slide open' : 'slide'}></div>

        <h1>CSS Animations</h1>
          <div className={ this.state.animation1 ? 'square animation1' : 'square'}></div> 
          <button 
            onClick={this.animation1}>click me</button> 

          <div className={this.state.animation2 ? 'tire roll' : 'tire'}></div> 
          <button
            onClick={this.animation2} >click me</button>  
      </div>
    );
  }
}

export default App;
