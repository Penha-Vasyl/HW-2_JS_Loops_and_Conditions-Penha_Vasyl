let userNumberN = + (prompt('Please write nitial number'));
let userNumberM = + (prompt('Please write final number'));

let sumNumbers = 0;
while (isNaN(userNumberN)) {
  alert('Please enter a number')
  userNumberN = + (prompt('Please write nitial number'));
} 

while (isNaN(userNumberM)) {
  alert('Please enter a number')
  userNumberM = + (prompt('Please write final number'));
} 

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
