const userNumberN = + (prompt('Please write nitial number'));
const userNumberM = + (prompt('Please write final number'));

// const whetherItIsAnIntegerNumberN = (Number.isInteger(userNumberN));
// const whetherItIsAnIntegerNumberM = (Number.isInteger(userNumberM));

const integerNumberN = parseInt(userNumberN);
const integerNumberM = parseInt(userNumberM);

let sumNumbers = 0;
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
