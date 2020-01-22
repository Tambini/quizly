import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <div>

      {props.currentUser &&
        <div className="logout-wrapper">
          <button className="logout-button" onClick={props.handleLogout}>Logout</button>
        </div>
      }

      <header>
        <Link to='/login'>
          <h1>Quizly</h1>
        </Link>
      </header>

      <div className="homepage-options-form-wrapper">
        {props.currentUser ?
          <div className="welcome-message">
            <h4>Hello, <span>{props.currentUser.username}</span>! Let's play!</h4>
          </div>
          :
          <div className="homepage-options-form-wrapper">

            <Link to='/login'>
              <button className="login-box" onClick={props.clearErrorMsg}> Login </button>
            </Link>

            <Link to='/register'>
              <button className="register-box" onClick={props.clearErrorMsg}> Register </button>
            </Link>

            <Link to='/guest-landing'>
              <button className="guest-box" onClick={props.clearErrorMsg}> Guest </button>
            </Link>

          </div>
        }
      </div>

    </div>
  )
}

export default Header;
