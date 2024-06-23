function GuessInput({
  guess,
  setGuess,
  setGuessList,
  checkedGameWin,
  gameFinished
}) {
  function handleSubmit(e) {
    e.preventDefault()
    console.log({guess})
    setGuessList(prev => [...prev, {id: crypto.randomUUID(), value: guess}])
    checkedGameWin(guess)
    setGuess('')
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
        onChange={e => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
