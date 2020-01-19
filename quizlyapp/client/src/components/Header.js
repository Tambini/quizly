import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  console.log(props.currentUser)
  return (
    <div className="homepage-options-form-wrapper">
      <header>
        <h1>Welcome to Quizly!</h1>
        <Link to='/' > Home </Link>
      </header>

      <div>
        {props.currentUser ?
          <div>
            <p>Hello, {props.currentUser.username}!</p>
            <button className="logout-button" onClick={props.handleLogout}>Logout</button>
          </div>
          :
          <div>
            <Link to='/login'> Login </Link>
            <br></br>
            <Link to='/register'> Register </Link>
          </div>
        }
      </div>

    </div>
  )
}

export default Header;
