import React, { Component } from 'react';
import UserLanding from './UserLanding';

export default class Register extends Component {
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

  render() {
    return (
      <div>
        {!this.props.currentUser &&
          <div className="register-form-wrapper">
            <form className="register-form" onSubmit={(e) => this.props.handleRegister(e, { username: this.state.username, password: this.state.password })}>
            <h2>Register</h2>
            
              <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <input type="submit" />
            
            </form>
          </div>
        }
        {this.props.currentUser &&
          <UserLanding setCategory={this.props.setCategory}
            categoryList={this.props.categoryList} />
        }

      </div>
    )
  }

}