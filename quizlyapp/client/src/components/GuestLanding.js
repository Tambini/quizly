import React, { Component } from 'react';

class GuestLanding extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Let's Play</h1>
        <h3>click on any of the categories to enter the game</h3>
        <div className="button-wrapper">
          <button className="button1">Category</button>
          <button className="button2">Category</button>
          <button className="button3">Category</button>
          <button className="button4">Category</button>
          <button className="button5">Category</button>
          <button className="button6">Category</button>
          <button className="button7">Category</button>
          <button className="button8">Category</button>
        </div>
      </div>
    )
  }
}

export default GuestLanding;