// import React from 'react'
import './index.css'

const WinOrLoseCard = props => {
  const {currentScore, playAgain} = props
  const winOrLoseText = currentScore === 12 ? 'Won' : 'Lose'
  const winOrLoseImageUrl =
    currentScore === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="result-card">
      <div>
        <h1 className="result-heading">You {winOrLoseText}</h1>
        <p className="score-label">
          {currentScore === 12 ? 'Best ' : null}Score
        </p>
        <p className="currentToTotal">{currentScore}/12</p>
        <button type="button" className="playAgain" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src={winOrLoseImageUrl}
          alt={winOrLoseText}
          className="winOrLoseImage"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
