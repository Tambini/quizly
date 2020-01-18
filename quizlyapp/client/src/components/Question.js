import React from 'react'

function Question(props) {
  return (
<<<<<<< HEAD
    <div>
      {this.props.questions.map((q, key) => (
        <div>

        </div>
      )}
=======
    <div className="question">
      <div className="question-category">
        Current Category: {props.question.category}
      </div>
      <div className="question-question">
        {props.question.question}?
      </div>
      <div className="question-answer-options">
        {props.optionArray.map((option, key) => (
          <div key={key}>
            <button className="question-option" onClick={(e) => {
              props.optionSelected(e, option)
            }}>
              {option}
            </button>
          </div>
        ))}
      </div>
>>>>>>> 72670d05223deb0077c7c3293c7b4c920a5feb18
    </div>
  )
}

export default Question