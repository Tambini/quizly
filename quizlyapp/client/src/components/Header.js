import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <div>
      <header>
        <Link to='/'>
          <h1>Quizly</h1>
        </Link>
      </header>

      <div className="homepage-options-form-wrapper">
        {props.currentUser ?
          <div className="welcome-message">
            <p>Hello, {props.currentUser.username}!</p>
            <button className="logout-button" onClick={props.handleLogout}>Logout</button>
          </div>
          :
          <div className="homepage-options-form-wrapper">
            <button className="login-box">
              <Link to='/login'> Login </Link>
            </button>
            <button className="register-box">
              <Link to='/register'> Register </Link>
            </button>
            <button className="guest-box">
              <Link to='/guest-landing'> Guest </Link>
            </button>
          </div>
        }
      </div>

    </div>
  )
}

export default Header;
