const arrayAnalysis = (numbers) => {
  const average = numbers.reduce((acc, cr) => acc += cr)/numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    average: average,
    min: min,
    max: max,
    length: 3
  }
}

module.exports = arrayAnalysis;
