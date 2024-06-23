import React from 'react'
import {range} from '../../utils'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import Guess from '../Guess/Guess'

function GuessList({guessList, answer, setGameFinished, setYouWin}) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map(item => {
        const guessWord = guessList[item]
        return (
          <Guess
            key={'guess-' + item}
            guessWord={guessWord}
            answer={answer}
            setGameFinished={setGameFinished}
            setYouWin={setYouWin}
          />
        )
      })}
    </div>
  )
}

export default GuessList
