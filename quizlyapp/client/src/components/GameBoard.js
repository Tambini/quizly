import React, { Component } from 'react'

//custom api helper
import { getAllTrivia, getTriviaByCategory, addNewScore } from '../services/api_helper';

//custom components
import Question from './Question';
import ScoreList from './ScoreList'

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      optionArray: [],
      category: '',
      questionArray: [],
      questionCounter: 0,
      currentQuestion: null,
      scoreTotal: 0,
      message: '',
      questionsLoaded: false,
      showNextQuestionButton: false,
      gameOver: false,
      showScores: false
    }
  }

  getAllQuestions = async () => {
    const questionArray = await getAllTrivia(); //passed through props from apihelper impoted in App.js

    this.setState({
      questionArray,
      questionsLoaded: true
    })
  }

  getAllCategoryQuestions = async (category) => {
    const questionArray = await getTriviaByCategory(category); //passed through props from apihelper impoted in App.js

    this.setState({
      questionArray,
      category,
      questionsLoaded: true
    })
  }

  getRandomQuestion = () => {
    if (this.state.questionArray.length > 0) {
      let randomIndex = Math.floor(Math.random() * this.state.questionArray.length);
      let tempQuestionArray = this.state.questionArray.slice(0);
      let currentQuestion = tempQuestionArray.splice(randomIndex, 1); //I beleive splice mutates the array so it must be performed on a temp array and resaved into sate after.
      this.jumbleCurrentAnswers(currentQuestion[0]); //put answer and alternate option answers in array and shuffle it before passing to <Question />

      this.setState({
        currentQuestion: currentQuestion[0],
        questionArray: tempQuestionArray
      })
    } else {
      this.setState({
        gameOver: true,
        showNextQuestionButton: false
      })

    }

  }

  jumbleCurrentAnswers = (cq) => {
    let tempOptionArray = [];
    tempOptionArray.push(cq.answer, cq.option1, cq.option2, cq.option3);
    let optionArray = []; //I know this is getting a tad convoluted.. this is the only way I thought of that we could do this, or use the shuffle array function from unit 1 which would also work.
    while (tempOptionArray.length > 0) {
      let randomIndex = Math.floor(Math.random() * tempOptionArray.length); //using this again :)
      let tempAnswer = tempOptionArray.splice(randomIndex, 1) // removes 1 element from the array reducing tempOptionArray.length by 1, eventually ending the loop.
      optionArray.push(tempAnswer);
    }

    this.setState({
      optionArray //now optionArray is filled randomly with the 3 options and 1 answer we won't really know the order but won't need to, answer still tied to object & in state.
    })
  }

  optionSelected = (e, playerChosenOption) => { //so the player has chosen their answer, were they right? call this on every answer choice made
    if (playerChosenOption[0] === this.state.currentQuestion.answer) {
      this.setState({
        scoreTotal: this.state.scoreTotal + this.state.currentQuestion.value,
        message: `You got the answer right! ${this.state.currentQuestion.value} points added to your score.`,
        questionCounter: this.state.questionCounter + 1,
        showNextQuestionButton: true
      })
    } else {
      this.setState({
        message: `Sorry, that was incorrect.`,
        questionCounter: this.state.questionCounter + 1,
        showNextQuestionButton: true
      })
    }
    this.getRandomQuestion(); // despite the outcome, get the next question ready to go.
  }

  showNext = () => {
    this.setState({
      showNextQuestionButton: false
    })
  }

  showScores = () => {
    this.setState({
      showScores: true

    })
  }

  submitPlayerScore = async (score) => {
    await addNewScore({ username: this.props.username, score: this.state.scoreTotal });
  }

  componentDidMount = async () => { //if category is passed as a prop get only those questions, otherwise get all questions.
    this.props.category ?
      await this.getAllCategoryQuestions(this.props.category) :
      await this.getAllQuestions()
  }

  render() {
    console.log(this.props.username);
    return (
      <div className="gameboard">
        <div className="game-stats">
          <div className="gameboard-score">
            {this.state.scoreTotal} Score
          </div>
          <div className="question-counter">
            {this.state.questionCounter} Question
          </div>
        </div>

        {//if questions are not loaded and game isnt over, show play button, otherwise show the question/answer options
          !this.state.currentQuestion && !this.state.gameOver ?
            <button className="play" onClick={this.getRandomQuestion}>PRESS ME TO PLAY!</button>
            :
            !this.state.showNextQuestionButton && !this.state.gameOver &&
            <div>

              <Question
                question={this.state.currentQuestion}
                optionArray={this.state.optionArray}
                optionSelected={this.optionSelected}
                questionCounter={this.state.questionCounter} Question
              />
            </div>
        }
        {
          this.state.showNextQuestionButton &&
          <div className="next-question">
            <div> {this.state.message}</div>
            <button onClick={this.showNext}>NEXT QUESTION</button>

          </div>
        }
        {
          this.state.gameOver && !this.state.showScores &&

          <div>
            {/* {this.submitPlayerScore(this.state.scoreTotal)}; */}
            <h2>OUT OF QUESTIONS FOR NOW TY FOR TESTING</h2>
            <button onClick={async () => {
              await this.submitPlayerScore(this.state.scoreTotal);
              this.showScores();
            }}>See High Scores!</button>
          </div>
        }
        {
          this.state.showScores &&
          <div>
            <ScoreList />
          </div>
        }


      </div>
    )
  }
}

export default GameBoard