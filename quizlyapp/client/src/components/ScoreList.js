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

  sortScores = () => {
    let topTen = this.state.scores.sort((a, b) => (a.score > b.score) ? -1 : 1)
    topTen = topTen.slice(0, 10);
    this.setState({
      scores: topTen
    })
  }

  componentDidMount = async () => {
    const scores = await getScores();

    this.setState({
      scores,
      scoresLoaded: true
    })
    this.sortScores();
  }

  render() {
    console.log(this.state.scores)
    return (
      <div className="score-list">

        {this.state.scoresLoaded &&

          this.state.scores.map((score, key) => (
            <div key={key} className="score">
              <div className="score-number">
                {key + 1}
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