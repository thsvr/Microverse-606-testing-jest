const arrayAnalysis = (numbers) => {
  const average = numbers.reduce((acc, cr) => {
    // eslint-disable-next-line no-param-reassign
    acc += cr;
    return acc;
  }) / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const { length } = numbers;

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = arrayAnalysis;
