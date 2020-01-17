import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

// custom api helper
import { loginUser, registerUser, verifyUser } from './services/api_helper';
// custom components
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Register';
import Footer from './components/Footer';
import Header from './components/Header';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      errorText: '',
      questions: []
    }
  }

  // login
  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: 'You must supply a username AND password'
      })
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser,
        errorText: ''
      })
    }
  }

  // register
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: 'You must supply a username AND password ya animal'
      })
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser,
        errorText: ''
      })
    }
  }

  // verify
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }

  }

  // logout
  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }

  componentDidMount() {
    this.handleVerify();
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App" >

        <Header />

        <div>
          {this.state.currentUser ?
            <div>
              <p>Hello, {this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
            : <Link to='/login' > Login </Link>
          }
        </div>

        <div>
          {this.state.currentUser ?
            <div>
              <p>Hello, {this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
            : <Link to='/register' > Register </Link>
          }
        </div>



        <div className="login-register-wrappers">
          <Route path="/login" render={() => (
            <div>
              <Login
                handleLogin={this.handleLogin}
                currentUser={this.state.currentUser}
              />
            </div>
          )} />

          <Route path="/register" render={() => (
            <div>
              <Register
                handleRegister={this.handleRegister}
                currentUser={this.state.currentUser}
              />
            </div>
          )} />
        </div>


        <div>
          {this.state.errorText &&
            <p className="error">{this.state.errorText}</p>}
        </div>


        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;

