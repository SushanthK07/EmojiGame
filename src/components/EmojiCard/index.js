// import React from 'react'
import './index.css'

const EmojiCard = props => {
  const {emojiName, emojiUrl, clickHandler} = props
  return (
    <li className="emoji-card">
      <img
        className="emoji-image"
        src={emojiUrl}
        alt={emojiName}
        onClick={() => clickHandler(emojiName)}
      />
    </li>
  )
}

export default EmojiCard
