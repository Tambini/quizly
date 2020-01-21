import React from 'react'

import { getUnapprovedTrivia, deleteTrivia } from '../services/api_helper'
import TriviaForm from './TriviaForm'

export default class AdminLanding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      unapprovedList: [],
      numberUnapproved: 0,
      showForm: false,
      showUnapprovedList: false,
      questionToEdit: {},
      message: '',
      showDeleteButton: false
    }
  }

  loadUnapprovedList = async () => {
    const unapprovedList = await getUnapprovedTrivia();

    this.setState({
      unapprovedList,
      numberUnapproved: unapprovedList.length
    })
  }

  showUnapprovedList = () => {
    this.setState({
      showUnapprovedList: true
    })
  }

  conditionalForm = (e, bool, question) => {
    e.preventDefault();
    this.setState({
      showForm: bool,
      questionToEdit: question
    })
  }

  formComplete = (msg) => {
    this.setState({
      message: msg,
      showForm: false,
      questionToEdit: {}
    })
  }

  deleteConfirmation = (question) => {
    this.setState({
      message: 'Are you sure you want to delete this question completely?',
      showDeleteButton: true,
      questionToEdit: question
    })
  }

  componentDidMount = async () => {
    this.loadUnapprovedList();
  }

  render() {
    return (
      <div>
        <div>
          Number of unapproved trivia questions: {this.state.numberUnapproved}
        </div>
        {!this.state.showUnapprovedList &&
          <div>
            Load yet to be approved trivia?
          <button onClick={this.showUnapprovedList}>Load</button>
          </div>
        }
        <div>
          {this.state.message}
        </div>
        {this.state.unapprovedList.length > 0 && this.state.showUnapprovedList &&
          this.state.unapprovedList.map((question, key) => (
            <div className="unapproved-question" key={key}>
              {!this.state.showForm && !this.state.showDeleteButton &&
                <div>
                  <div>
                    Question: {question.question}
                  </div>
                  <div>
                    Answer: {question.answer}
                  </div>
                  <div>
                    Option1: {question.option1}
                  </div>
                  <div>
                    Option2: {question.option2}
                  </div>
                  <div>
                    Option3: {question.option3}
                  </div>
                  <div>
                    Value: {question.value}
                  </div>
                  <div>
                    Category: {question.category}
                  </div>
                  <div>
                    Approved?: {question.approved}
                  </div>
                  <button onClick={(e) => this.conditionalForm(e, true, question)}>
                    Edit
                  </button>
                  <button onClick={() => this.deleteConfirmation(question)}>
                    Delete
                  </button>
                </div>
              }

            </div>
          ))}
        {this.state.showForm &&
          <div>
            <TriviaForm
              apiCall="put"
              questionObj={this.state.questionToEdit}
              admin={true}
              formComplete={this.formComplete}
              loadUnapprovedList={this.loadUnapprovedList}
            />
            <button onClick={(e) => this.conditionalForm(e, false, {})}>Cancel</button>
          </div>
        }
        {this.state.showDeleteButton &&
          <div>
            <button onClick={async (e) => {
              e.preventDefault();
              await deleteTrivia(this.state.questionToEdit.id);
              this.setState({
                message: 'Question Deleted.',
                showDeleteButton: false
              })
              await this.loadUnapprovedList();
            }}>YES, DELETE THIS QUESTION</button>
            <button onClick={(e) => {
              e.preventDefault();
              this.setState({
                showDeleteButton: false,
                message: ''
              })
            }}>NO, DON'T DELETE</button>
          </div>
        }
      </div >
    )
  }

}