import React from 'react'

import { getScores } from '../services/api_helper'

export default class ScoreList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scores: null,
      scoresLoaded: false
    }
  }

  componentDidMount = async () => {
    const scores = await getScores();

    this.setState({
      scores,
      scoresLoaded: true
    })
  }

  render() {
    console.log(this.state.scores)
    return (
      <div className="score-list">
        {this.state.scoresLoaded &&

          this.state.scores.map((score, key) => (
            <div key={key} className="score">
              <div className="score-number">
                {key}
              </div>
              <div className="score-name">
                {score.username}
              </div>
              <div className="score-score">
                {score.score}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}