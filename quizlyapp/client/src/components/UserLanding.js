import React, { Component } from 'react';
import { addNewTrivia } from '../services/api_helper';
import { Link } from 'react-router-dom';

class UserLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      category: "",
      value: "",
    }
  }

  handleDropdown = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Let's Play</h1>
        <h3>click on any of the categories to enter the game</h3>
        <div className="button-wrapper">
          <Link to='/gameboard'>
            <button className="button1" >Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button2">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button3">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button4">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button5">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button6">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button7">Category</button>
          </Link>
          <Link to='/gameboard'>
            <button className="button8">Category</button>
          </Link>
        </div>

        <form className="question-form"
          onSubmit={(e) => addNewTrivia({
            answer: this.state.answer,
            option1: this.state.option1,
            option2: this.state.option2,
            option3: this.state.option3,
            question: this.state.question,
            category: this.state.category,
            approved: false
          })} >
          <h2>Submit a Trivia Question</h2>
          <label htmlFor="category"> Category</label>
          <div className="custom-select" >
            <select onChange={this.handleDropdown}>
              <option> Please select one</option>
              <option value="animals"> Animals</option>
              <option value="science"> science</option>
              <option value="history">History</option>
              <option value="studpid%20answer"> Stupid aswers</option>
              <option value="Around%20the%20World" > Around the world</option>
            </select>
          </div>
          <label htmlFor="question"> Question</label>
          <input type="text"
            name="question"
            value={this.state.question}
            onChange={this.handleChange} />
          <label htmlFor="answer"> answer </label>
          <input type="answer"
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange} />
          <label htmlFor="option1"> option 1</label>
          <input type="option1"
            name="option1"
            value={this.state.option1}
            onChange={this.handleChange} />
          <label htmlFor="option1"> option 2</label>
          <input type="option2"
            name="option2"
            value={this.state.option2}
            onChange={this.handleChange} />
          <label htmlFor="option1"> option 3</label>
          <input type="option3"
            name="option3"
            value={this.state.option3}
            onChange={this.handleChange} />
          <input type="submit" />
        </form>

      </div >
    )
  }
}

export default UserLanding;