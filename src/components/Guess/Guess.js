import React from 'react'
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

function Guess({guessWord, answer, setGameFinished, setYouWin}) {
  return (
    <p className='guess'>
      {range(0, 5).map(word => {
        const checkedWord = guessWord && checkGuess(guessWord.value, answer)
        return guessWord ? (
          <span
            key={`cell-` + word}
            className={`cell ${checkedWord[word].status}`}
          >
            {checkedWord[word].letter}
          </span>
        ) : (
          <span key={`cell-` + word} className='cell'></span>
        )
      })}
    </p>
  )
}

export default Guess
