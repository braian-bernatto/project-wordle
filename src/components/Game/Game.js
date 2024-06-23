import React from 'react'

import {sample} from '../../utils'
import {WORDS} from '../../data'
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'
import Banner from '../Banner/Banner'
import {checkGuess} from '../../game-helpers'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  const [guess, setGuess] = React.useState('')
  const [guessList, setGuessList] = React.useState([])
  const [gameFinished, setGameFinished] = React.useState(false)
  const [youWin, setYouWin] = React.useState(false)

  // To make debugging easier, we'll log the solution in the console.
  console.info({answer})

  function checkedGameWin(word) {
    if (!word) return
    const checkedWord = checkGuess(word, answer).every(
      item => item.status === 'correct'
    )

    if (checkedWord) {
      setYouWin(true)
      setGameFinished(true)
    }

    if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED && !checkedWord) {
      setYouWin(false)
      setGameFinished(true)
    }
  }

  function restartGame() {
    setAnswer(sample(WORDS))
    setGameFinished
    setYouWin(false)
    setGameFinished(false)
    setGuessList([])
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
          restartGame={restartGame}
        />
      )}
    </>
  )
}

export default Game
