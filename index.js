let userNumberN = '';
let userNumberM = '';

let sumNumbers = 0;
do {
  userNumberN = + (prompt('Please write іnitial number'));
  userNumberM = + (prompt('Please write final number'));
}
while (isNaN(userNumberN) || isNaN(userNumberM))

const integerNumberN = parseInt(userNumberN);
const integerNumberM = parseInt(userNumberM);


if (integerNumberN > integerNumberM) {
  alert('The initial number cannot be greater than the final number. Enter the number again.')
}
else {
  const skipEvenNumbers = confirm('Whether to skip even numbers?');
  for (let i = integerNumberN; i <= integerNumberM; i++) {
    if (skipEvenNumbers === false || i % 2 !== 0) {
      sumNumbers += i;
    }
  }
}

alert(sumNumbers);
