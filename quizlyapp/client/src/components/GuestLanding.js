import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GuestLanding extends Component {


  render() {
    return (
      <div>
        <h1>Let's Play</h1>
        <h3>click on any of the categories to enter the game</h3>
        <div className="button-wrapper">
          <Link to='/gameboard'>
            <button className="button1" >Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button2">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button3">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button4">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button5">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button6">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button7">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button8">Category</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default GuestLanding;