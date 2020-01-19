import React from 'react'

import { getUnapprovedTrivia } from '../services/api_helper'

export default class AdminLanding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      unapprovedList: [],
      numberUnapproved: 0
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

  componentDidMount = async () => {
    this.loadUnapprovedList();
  }

  render() {
    return (
      <div>
        <div>
          Number of unapproved trivia questions: {this.state.numberUnapproved}
        </div>
        <div>
          Load yet to be approved trivia?
          <button onClick={this.showUnapprovedList}>Load</button>
        </div>

        {this.state.unapprovedList.length > 0 && this.state.showUnapprovedList &&
          this.state.unapprovedList.map((question, key) => (
            <div className="unapproved-question" key={key}>
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
            </div>
          ))}
      </div >
    )
  }

}