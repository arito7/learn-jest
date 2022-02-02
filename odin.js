function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let temp = '';
  for (let i = str.length - 1; i > -1; i -= 1) {
    temp += str[i];
  }
  return temp;
}

const calculator = {
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  divide: (n1, n2) => (n2 === 0 ? null : n1 / n2),
  multiply: (n1, n2) => n1 * n2,
};

// a: 97 z: 122
// A: 65 Z: 90
function caesarCipher(str, shift) {
  let cipher = '';
  for (let i = 0; i < str.length; i += 1) {
    const code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      cipher +=
        code + shift > 90
          ? String.fromCharCode(code + shift - 26)
          : String.fromCharCode(code + shift);
    } else if (code >= 97 && code <= 122) {
      cipher +=
        code + shift > 122
          ? String.fromCharCode(code + shift - 26)
          : String.fromCharCode(code + shift);
    } else {
      cipher += str[i];
    }
  }
  return cipher;
}

function analyzeArray(arr) {
  return {
    length: arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    average:
      arr.reduce((b, v) => {
        return (b += v);
      }, 0) / arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
