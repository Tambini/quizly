import React, { Component } from 'react'

import { addNewTrivia, editTrivia } from '../services/api_helper';

export default class TriviaForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      category: "",
      value: 100, // just a default value, admin will have to go in and decide on difficulty later.
      approved: false, // always false from users perspective until admin checks it.
      admin: false,
      id: null,
      message: '',
      showForm: false,
      buttonText: '',
      showCancelButton: true
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

  handleCheckboxChange = (e) => {
    const name = e.target.name;
    // const value = e.target.value;
    const checked = e.target.checked;
    this.setState({
      [name]: checked
    })
  }

  submitSwitch = async (e) => {
    e.preventDefault();
    switch (this.props.apiCall) {
      case ("post"):
        if (this.state.answer === '' || this.state.option1 === '' || this.state.option2 === '' || this.state.option3 === '' || this.state.category === '' || this.state.question === '') {
          this.setState({
            message: 'You have to fill out the form completely.'
          })
        } else {
          try {
            await addNewTrivia({
              answer: this.state.answer,
              option1: this.state.option1,
              option2: this.state.option2,
              option3: this.state.option3,
              question: this.state.question,
              value: 100,
              category: this.state.category,
              approved: false
            });
            this.setState({
              message: 'Successfully submitted trivia question for approval! Check back later to see if your question is added to the mix!',
              showForm: false
            })
          } catch (e) {
            console.error(e.message);
            this.setState({
              message: 'Trivia was not submitted successfully.'
            })
          }
        }
        break;
      case ("put"):
        try {
          await editTrivia(this.state.id, {
            answer: this.state.answer,
            option1: this.state.option1,
            option2: this.state.option2,
            option3: this.state.option3,
            question: this.state.question,
            value: this.state.value,
            category: this.state.category,
            approved: this.state.approved
          });
          this.setState({
            message: 'Successfully edited and updated question'
          })
          this.props.formComplete('Successfully edited and updated question');
          this.props.loadUnapprovedList();
        } catch (e) {
          console.error(e.message);
        }
        break;
      default:
        console.log("no choice somehow selected - from switch/triviaform.js");
    }
  }

  componentDidMount = () => {
    if (this.props.admin === true) {
      this.setState({
        showForm: true,
        buttonText: "Submit question edits",
        showCancelButton: false
      })
    } else {
      this.setState({
        buttonText: "Submit your own question?"
      })
    }

    if (this.props.questionObj) {
      this.setState({
        id: this.props.questionObj.id,
        admin: this.props.admin,
        answer: this.props.questionObj.answer,
        option1: this.props.questionObj.option1,
        option2: this.props.questionObj.option2,
        option3: this.props.questionObj.option3,
        question: this.props.questionObj.question,
        value: this.props.questionObj.value,
        category: this.props.questionObj.category
      })
    }
  }

  render() {
    return (
      <div>
        <div className="alert-message">
          {this.state.message}
        </div>
        {this.state.showForm ?
          <div className="question-form-wrapper">
            <form className="question-form"
              onSubmit={(e) => this.submitSwitch(e)} >
              <h2>Submit a Trivia Question</h2>
              <br></br>
              <label htmlFor="category"> Category</label>
              <div className="custom-select" >
                <select onChange={this.handleDropdown}>
                  <option> Please select one</option>
                  <option value="animals"> Animals</option>
                  <option value="science"> science</option>
                  <option value="history">History</option>
                  <option value="stupid%20answer"> Stupid answers</option>
                  <option value="Around%20the%20World" > Around the world</option>
                </select>
              </div>
              <label htmlFor="question"> Question </label>
              <input type="text"
                name="question"
                value={this.state.question}
                onChange={this.handleChange} />
              <label htmlFor="answer"> Answer </label>
              <input type="text"
                name="answer"
                value={this.state.answer}
                onChange={this.handleChange} />
              <label htmlFor="option1"> Option 1</label>
              <input type="text"
                name="option1"
                value={this.state.option1}
                onChange={this.handleChange} />
              <label htmlFor="option2"> Option 2</label>
              <input type="text"
                name="option2"
                value={this.state.option2}
                onChange={this.handleChange} />
              <label htmlFor="option3"> Option 3</label>
              <input type="text"
                name="option3"
                value={this.state.option3}
                onChange={this.handleChange} />
              {this.props.apiCall !== 'post' &&
                <div>
                  <label htmlFor="value"> value</label>
                  <br />
                  <input type="text"
                    name="value"
                    value={this.state.value}
                    onChange={this.handleChange} />
                </div>
              }
              {this.props.apiCall !== 'post' &&
                <div>
                  <label htmlFor="approved"> approved</label>
                  <br />
                  <input type="checkbox"
                    name="approved"
                    checked={this.state.approved}
                    // value={this.state.approved}
                    onChange={this.handleCheckboxChange} />
                </div>
              }
              <input type="submit" />
            </form>


            {this.state.showCancelButton && <button className="cancel-button" onClick={(e) => {
              e.preventDefault();
              this.setState({
                showForm: false
              })
            }}>Cancel</button>}
          </div>
          :
          <div className="submit-question-button">
            <button onClick={(e) => {
              e.preventDefault();
              this.setState({
                showForm: true,
                message: ''
              })
            }}>{this.state.buttonText}</button>
          </div>
        }



      </div>
    )
  }

}