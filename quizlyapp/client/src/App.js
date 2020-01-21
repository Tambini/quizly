import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

// custom api helper
import { loginUser, registerUser, verifyUser, getAdmins, getTriviaCategories } from './services/api_helper';

// custom components
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GuestLanding from './components/GuestLanding';
import UserLanding from './components/UserLanding';
import AdminLanding from './components/AdminLanding'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      errorText: '',
      category: 'animals',
      categoryList: [],
      admin: false
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
      this.checkForAdmin();
    }
  }

  // register
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: 'You must supply a username AND password'
      })
    } else {
      const currentUser = await registerUser(registerData);
      if (currentUser === "EXISTS") {
        this.setState({
          errorText: 'Username taken, please choose another.'
        });
      } else {
        this.setState({
          currentUser,
          errorText: ''
        });
      }
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

  checkForAdmin = async () => {
    const adminList = await getAdmins();
    const admin = adminList.filter(name =>
      name.username === this.state.currentUser.username
    )

    if (admin.length > 0) {
      // console.log("checkForAdmin admin: " + admin.length + " " + admin[0].username)
      // console.log("checkForAdmin currentUser: " + this.state.currentUser.username)
      // console.log("YOU ARE ADMIN")
      this.setState({
        admin: true
      })
    } else {
      // console.log("YOU ARE NOT ADMIN")
      this.setState({
        admin: false
      })
    }
  }

  // logout
  handleLogout = () => {
    this.setState({
      currentUser: null,
      admin: false
    })
    localStorage.removeItem('authToken');
  }

  setCategory = (category) => {
    this.setState({
      category
    })
  }

  setCategoryList = async () => {
    const categoryList = await getTriviaCategories();
    this.setState({
      categoryList
    })
  }

  componentDidMount = async () => {
    await this.handleVerify();
    await this.setCategoryList();
  }

  render() {
    return (
      <div className="App" >

        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          admin={this.state.admin}
        />


        <Route path="/login" render={() => (
          <div>
            <Login
              handleLogin={this.handleLogin}
              currentUser={this.state.currentUser}
              setCategory={this.setCategory}
              categoryList={this.state.categoryList}
              admin={this.state.admin}
              checkForAdmin={this.checkForAdmin}
            />
          </div>
        )} />

        <Route path="/register" render={() => (
          <div>
            <Register
              handleRegister={this.handleRegister}
              currentUser={this.state.currentUser}
              setCategory={this.setCategory}
              categoryList={this.state.categoryList}
            />
          </div>
        )} />

        <div>
          {this.state.errorText &&
            <p className="error">{this.state.errorText}</p>}
        </div>

        <Route path="/guest-landing" render={() =>
          <GuestLanding
            setCategory={this.setCategory}
            categoryList={this.state.categoryList}
          />} />

        <Route path="/user-landing" render={() =>
          <UserLanding
            setCategory={this.setCategory}
            categoryList={this.state.categoryList} />
        } />

        {this.state.admin && // this is non functional right now instead using the conditional rendering in login
          <Route path="/admin-landing" render={() =>
            <AdminLanding
            />
          } />
        }

        <Route path="/gameboard" render={() => (
          <div>
            {this.state.currentUser ?
              <GameBoard
                category={this.state.category}
                username={this.state.currentUser.username}
              />
              :
              <GameBoard
                category={this.state.category}
                username="guest"
              />
            }
          </div>
        )} />

        <Footer />

      </div>
    );
  }
}

export default App;