import React from 'react'
import {KEYBOARD_LETTERS} from '../../data'
import {checkGuess} from '../../game-helpers'

function Keyboard({guessList, answer}) {
  const list = guessList.reduce((acc, curr) => {
    const checkedWord = checkGuess(curr.value, answer)
    return [...acc, ...checkedWord]
  }, [])

  const correctList = list
    .filter(item => item.status === 'correct')
    .map(item => item.letter)
  const incorrectList = list
    .filter(item => item.status === 'incorrect')
    .map(item => item.letter)
  const misplacedList = list
    .filter(item => item.status === 'misplaced')
    .map(item => item.letter)

  function getLetterStatus(letter) {
    if (correctList.includes(letter)) return 'correct'
    if (misplacedList.includes(letter)) return 'misplaced'
    if (incorrectList.includes(letter)) return 'incorrect'
  }

  return (
    <div className='keyboard'>
      {KEYBOARD_LETTERS.map(item => (
        <div key={`row-` + item[0]} className='keyboard-row'>
          {item.split(',').map(letter => {
            return (
              <span
                key={letter}
                className={`keyboard-key ${getLetterStatus(letter)}`}
              >
                {letter.toUpperCase()}
              </span>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
