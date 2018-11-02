import React, { Component } from 'react'


class BuggyButton extends Component {
  failButton = () => {
    throw new Error("hahaha you idiot")
  }
  render() {
    return(<button onClick={() => this.failButton()}>Click me - Dare you</button>)
  }
}


export default BuggyButton;
