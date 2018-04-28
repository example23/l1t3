
function sumTo(n) {
  if (n <= 0) {
  console.log('n should be count from 1');
}
else {
  var sum = 1;
  for (var i = 2; i <= n; i++) {
    sum += 1/i;
  }
  return sum;
}
}
console.log(sumTo(10));//можно ввести вместо 10 число элементов прогрессии