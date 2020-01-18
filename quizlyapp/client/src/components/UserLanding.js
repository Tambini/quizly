import React, { Component } from 'react';

class UserLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      Category: "",
      value: "",
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
        <h1>Let's Play</h1>
        <h3>click on any of the categories to enter the game</h3>
        <div className="button-wrapper">
          <button className="button1">Category</button>
          <button className="button2">Category</button>
          <button className="button3">Category</button>
          <button className="button4">Category</button>
          <button className="button5">Category</button>
          <button className="button6">Category</button>
          <button className="button7">Category</button>
          <button className="button8">Category</button>
        </div>

        <form className="QuestionForm">
          <h2>Submit a Trivia Question</h2>
          <label htmlFor="category"> Category</label>
          <select className="dropdown">
            <option value="Animals"> Animals</option>
            <option value="Science"> Science</option>
            <option value="History">History</option>
            <option value="Stupid Answers"> Stupid Answers</option>
            <option value="Arorund the World"> Around the world</option>
          </select>
          <label htmlFor="question"> Question</label>
          <input type="text"
            name="question"
            value={this.state.question}
            onChange={this.handleChange}
          />
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

      </div>
    )
  }
}

export default UserLanding;