const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    sum += numbers[i];
  }
}

console.log(sum);
textSum.innerHTML = `La somma dei numeri dispari è ${sum}`;
