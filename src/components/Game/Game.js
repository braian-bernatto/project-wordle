import React from 'react'

import {sample} from '../../utils'
import {WORDS} from '../../data'
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'
import Banner from '../Banner/Banner'
import {checkGuess} from '../../game-helpers'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({answer})

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guessList, setGuessList] = React.useState([])
  const [gameFinished, setGameFinished] = React.useState(false)
  const [youWin, setYouWin] = React.useState(false)

  function checkedGameWin(word) {
    if (!word) return
    const checkedWord = checkGuess(word, answer).every(
      item => item.status === 'correct'
    )

    if (checkedWord) {
      setYouWin(true)
      setGameFinished(true)
      restartGame()
    }

    if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED && !checkedWord) {
      setYouWin(false)
      setGameFinished(true)
      restartGame()
    }
  }

  function restartGame() {
    setTimeout(() => {
      setYouWin(false)
      setGameFinished(false)
      setGuessList([])
    }, 3000)
  }

  return (
    <>
      <GuessList
        guessList={guessList}
        answer={answer}
        setGameFinished={setGameFinished}
        setYouWin={setYouWin}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        setGuessList={setGuessList}
        checkedGameWin={checkedGameWin}
        gameFinished={gameFinished}
      />
      {gameFinished && (
        <Banner
          youWin={youWin}
          numOfGuesses={guessList.length}
          answer={answer}
        />
      )}
    </>
  )
}

export default Game
