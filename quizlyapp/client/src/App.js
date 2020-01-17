import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

// custom api helper
import { loginUser, registerUser, verifyUser } from './services/api_helper';
// custom components
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Register';


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
    return (
      <div className="App" >

        <header> </header>

        <Home />
        <Login />
        <Register />

      </div>
    );
  }
}

export default App;

