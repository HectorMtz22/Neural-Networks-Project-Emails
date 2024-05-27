function * makePrediction () {
  const args = ['important', 'confirm', 'question', 'info']
  // yield each arg
  while (true) {
    for (const arg of args) {
      yield arg
    }
    yield args[Math.floor(Math.random() * 4)]
  }
}

export default makePrediction
