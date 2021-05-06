/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

*/

import React from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    isGameOver: false,
    clickedEmojiNamesList: [],
  }

  updateScore = () => {
    const {currentScore} = this.state
    if (currentScore < 12) {
      this.setState({
        currentScore: currentScore + 1,
        isGameOver: currentScore + 1 === 12,
      })
    }
  }

  updateTopScore = () => {
    const {currentScore, topScore} = this.state
    this.setState({
      topScore: currentScore > topScore ? currentScore : topScore,
    })
  }

  gameOver = () => {
    this.updateTopScore()
    this.setState({
      isGameOver: true,
    })
  }

  restartGame = () => {
    this.updateTopScore()
    this.setState({
      currentScore: 0,
      clickedEmojiNamesList: [],
      isGameOver: false,
    })
  }

  addEmojiName = emojiName => {
    const {clickedEmojiNamesList} = this.state
    this.setState({
      clickedEmojiNamesList: [...clickedEmojiNamesList, emojiName],
    })
  }

  handleClick = emojiName => {
    const {clickedEmojiNamesList} = this.state
    if (clickedEmojiNamesList.includes(emojiName)) {
      this.gameOver()
    } else {
      this.addEmojiName(emojiName)
      this.updateScore()
    }
  }

  render() {
    const {currentScore, topScore, isGameOver} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return (
      <div className="bg">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameOver={isGameOver}
        />
        {!isGameOver ? (
          <div>
            <ul className="emojis-container">
              {shuffledEmojisList().map(emoji => {
                const {id, emojiUrl} = emoji
                return (
                  <EmojiCard
                    key={id}
                    emojiName={emoji.emojiName}
                    emojiUrl={emojiUrl}
                    clickHandler={emojiName => this.handleClick(emojiName)}
                  />
                )
              })}
            </ul>
          </div>
        ) : (
          <WinOrLoseCard
            currentScore={currentScore}
            playAgain={this.restartGame}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
