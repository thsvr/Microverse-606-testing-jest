const arrayAnalysis = (numbers) => {
  const average = numbers.reduce((acc, cr) => acc += cr)/numbers.length

  return {
    average: average,
    min: 1,
    max: 2,
    length: 3
  }
}

module.exports = arrayAnalysis;
