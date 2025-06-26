function compareNumbers(a, b) {
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else if (a < b) {
    return `${b} is greater than ${a}`;
  } else {
    return `${a} is equal to ${b}`;
  }
}
console.log(compareNumbers(10, 5));
console.log(compareNumbers(3, 8));

console.log(compareNumbers(4, 4));
