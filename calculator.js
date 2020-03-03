const calculator = (() => {
  return {
    add: (...args) => {
      return args.reduce((cr, acc) => acc += cr, 0);
    },
    substract: (...args) => {
      let total = args[0];

      args.slice(1).forEach((n) => total -= n);
      return total
    },
    divide: (...args) => {
      let total = args[0];

      args.slice(1).forEach((n) => total /= n)
      return total;
    },
    multiply: () => {},
  };
})();

console.log(calculator.substract(1,2));

module.exports = calculator;