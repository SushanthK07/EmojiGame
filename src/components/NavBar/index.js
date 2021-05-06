// import React from 'react'
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameOver} = props
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="scores-container">
          <p className="score">
            Score: <span className="current-score">{currentScore}</span>
          </p>
          <p className="score">
            Top Score: <span className="top-score">{topScore}</span>
          </p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
