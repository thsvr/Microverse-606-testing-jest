const arrayAnalysis = (numbers) => {
  const average = numbers.reduce((acc, cr) => acc += cr)/numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}

module.exports = arrayAnalysis;
