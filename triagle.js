var fs = require('fs');

fs.readFile('Redirecting.txt', function (err, data) {

    var triagle = data.toString().split('\n');
    var newTriagle = triagle.slice(-triagle.length, -1).reverse();

    var conversionToTriagle = function (array) {
        var triagle = [];

        for (i in array) {
            triagle.push(array[i].split(' '))
        }
        return triagle
    };

    var maxValue = function (val1, val2) {

        return Math.max(Number(val1), Number(val2));
    };

    var maxSumm = function (matrix) {
        var result = [];
        var matrixLength = matrix.length;

        for (var i = 1; i < matrixLength; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = Number(matrix[i][j]) + maxValue(matrix[i - 1][j], matrix[i - 1][j + 1]);
                result.push(matrix[i][j])
            }
        }
        return result.slice(-1)
    }

    console.log(maxSumm(conversionToTriagle(newTriagle))); // 7273
});


