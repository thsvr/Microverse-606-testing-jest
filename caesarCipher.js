const caesarCipher = (message, key) => {
  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const alphabethObj = {
    "0": [
      "A",
      "a"
    ],
    "1": [
      "B",
      "b"
    ],
    "2": [
      "C",
      "c"
    ],
    "3": [
      "D",
      "d"
    ],
    "4": [
      "E",
      "e"
    ],
    "5": [
      "F",
      "f"
    ],
    "6": [
      "G",
      "g"
    ],
    "7": [
      "H",
      "h"
    ],
    "8": [
      "I",
      "i"
    ],
    "9": [
      "J",
      "j"
    ],
    "10": [
      "K",
      "k"
    ],
    "11": [
      "L",
      "l"
    ],
    "12": [
      "M",
      "m"
    ],
    "13": [
      "N",
      "n"
    ],
    "14": [
      "O",
      "o"
    ],
    "15": [
      "P",
      "p"
    ],
    "16": [
      "Q",
      "q"
    ],
    "17": [
      "R",
      "r"
    ],
    "18": [
      "S",
      "s"
    ],
    "19": [
      "T",
      "t"
    ],
    "20": [
      "U",
      "u"
    ],
    "21": [
      "V",
      "v"
    ],
    "22": [
      "W",
      "w"
    ],
    "23": [
      "X",
      "x"
    ],
    "24": [
      "Y",
      "y"
    ],
    "25": [
      "Z",
      "z"
    ],
    "42": []
  }

  const upperCases = [];

  let messageToNums = message.split('').map((c, i) => {
    let index = alphabetArr.indexOf(c.toUpperCase());
    let newIndex = index + key;

    if (index === -1) {
      newIndex = 42;
      alphabethObj[42].push(c);
    } else if (c === c.toUpperCase()) {
      upperCases.push(i);
    }

    if (newIndex !== 42 && newIndex > alphabetArr.length - 1) {
      let offSet = newIndex - alphabetArr.length;
      newIndex = offSet;
    }
    return newIndex
  });

  messageToNums  = messageToNums.map((n, i) => {
    if (alphabethObj[n] && n === 42) {
      const pontuation = alphabethObj[42].shift();
      return pontuation;
    } else if (alphabethObj[n]) {
      if (upperCases.includes(i)) {
        return alphabethObj[n][0];
      } else {
        return alphabethObj[n][1];
      }
    } else {
      return ' ';
    }
  });

  return messageToNums.join('');
};

module.exports = caesarCipher;