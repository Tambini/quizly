import React from 'react'

function Question(props) {
  return (
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
    </div>
  )
}

export default Question