function GuessInput({
  guess,
  setGuess,
  setGuessList,
  checkedGameWin,
  gameFinished
}) {
  function handleSubmit(e) {
    e.preventDefault()
    setGuessList(prev => [...prev, {id: crypto.randomUUID(), value: guess}])
    checkedGameWin(guess)
    setGuess('')
  }

  function handleChange(e) {
    const word = e.target.value.toUpperCase()
    setGuess(word)
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameFinished}
        id='guess-input'
        type='text'
        value={guess}
        pattern='.{5}'
        title='Please enter exactly 5 characters.'
        required
        onChange={handleChange}
      />
    </form>
  )
}

export default GuessInput
