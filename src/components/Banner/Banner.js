import React from 'react'
import Button from '../Button/Button'

function Banner({youWin, numOfGuesses, answer, restartGame}) {
  return (
    <>
      {youWin ? (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{numOfGuesses} guesses</strong>.
          </p>
          <Button handleClick={restartGame}>Reset</Button>
        </div>
      ) : (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <Button handleClick={restartGame}>Reset</Button>
        </div>
      )}
    </>
  )
}

export default Banner
