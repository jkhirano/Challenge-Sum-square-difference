exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNum) {
  this.naturalNum = naturalNum;

  this.sumOfSquares = function() {
    let result = 0;
    let squared = 0;

    for (let i = 0; i <= this.naturalNum; i++) {
      squared = i * i;
      result += squared;
    }
    return result;
  };

  this.squareOfTheSums = function() {
    let result = 0;
    let sum = 0;

    for (let i = 0; i <= this.naturalNum; i++) {
      sum += i;
      result = sum * sum;
    }
    return result;
  };
}
