const calculator = (() => ({
  add: (...args) => args.reduce((cr, acc) => {
    // eslint-disable-next-line no-param-reassign
    acc += cr;
    return acc;
  }, 0),
  substract: (...args) => {
    let total = args[0];

    args.slice(1).forEach((n) => {
      total -= n;
    });
    return total;
  },
  divide: (...args) => {
    let total = args[0];

    args.slice(1).forEach((n) => {
      total /= n;
    });
    return total;
  },
  multiply: (...args) => args.reduce((cr, acc) => {
    // eslint-disable-next-line no-param-reassign
    acc *= cr;
    return acc;
  }, 1),
}))();

module.exports = calculator;
