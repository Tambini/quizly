import React from 'react';

import { Link } from 'react-router-dom'
import TriviaForm from './TriviaForm';

function UserLanding(props) {
  return (
    <div>
      <h3>Click on any of the categories to enter the game:</h3>
      <div className="button-wrapper">
        {props.categoryList.map((category, key) => (
          <div key={key}>
            <Link to='/gameboard'>
              <button className={`button${key + 1}`} onClick={(e) => {

                props.setCategory(category.category)
              }
              }>{category.category}</button>
            </Link>
          </div>
        ))}
      </div>
      <TriviaForm
        apiCall="post"
        admin={false}
      />
    </div >
  )
}

export default UserLanding;