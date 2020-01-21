import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GuestLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //I actually think we can make this a non-class component unless other features are needed.
    }
  }


  //to replicate this for userboard you'll need both categoryList and setCategory from App.js
  render() {
    return (
      <div>
        <h3>Click on any of the categories to enter the game:</h3>
        <div className="button-wrapper">
          {this.props.categoryList.map((category, key) => ( //mapping through the array of categories ( which happen to be objects, so like {category: animals} )
            <div key={key}>
              <Link to='/gameboard'>
                <button className={`button${key + 1}`} onClick={(e) => { // giving each button a unique class for css
                  // e.preventDefault();  It won't work with this, idk why.
                  this.props.setCategory(category.category) // this is a function in App.js that is passed to this one, we need to call this to set the category in App.js so GameBoard knows which category to load questions from
                }
                }>{category.category}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default GuestLanding;