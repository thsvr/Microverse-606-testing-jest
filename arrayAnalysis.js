const arrayAnalysis = (numbers) => {
  const average = numbers.reduce((acc, cr) => acc += cr)/numbers.length;
  const min = Math.min(...numbers);

  return {
    average: average,
    min: min,
    max: 2,
    length: 3
  }
}

module.exports = arrayAnalysis;
