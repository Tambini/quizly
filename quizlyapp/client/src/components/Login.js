import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserLanding from './UserLanding';
import AdminLanding from './AdminLanding';


export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount = async () => {
    // this.props.checkForAdmin();
  }

  render() {

    if (!this.props.currentUser) {
      return (
        <div className="login-form-wrapper">
          <form onSubmit={(e) => this.props.handleLogin(e, { username: this.state.username, password: this.state.password })}>
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input type="submit" />
            <Link to="/register">Register</Link>
          </form>
        </div>
      )
    } else {
      if (this.props.currentUser && !this.props.admin) {
        return (
          <UserLanding setCategory={this.props.setCategory}
            categoryList={this.props.categoryList} />
        )
      } else if (this.props.currentUser && this.props.admin) {
        return (
          <AdminLanding
            setCategory={this.props.setCategory}
            categoryList={this.props.categoryList}
            checkForAdmin={this.checkForAdmin}
          />
        )
      }
    }
  }
}