// needs to be a class, that returns 2 methods
// outter function needs to be a class
// prototype way or ..? need to use new
// after js zombies

// loop 1 through n (10 or 100)
// square each n

// loop 1 through n (10 or 100)
// add all n, then square sum

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
