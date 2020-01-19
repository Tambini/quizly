import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  console.log(props.currentUser)
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

            <Link to='/login'>
              <button className="login-box"> Login </button>
            </Link>

            <Link to='/register'>
              <button className="register-box"> Register </button>
            </Link>

            <Link to='/guest-landing'>
              <button className="guest-box"> Guest </button>
            </Link>

          </div>
        }
      </div>

    </div>
  )
}

export default Header;
