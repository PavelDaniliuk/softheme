var fs = require('fs');

fs.readFile('Redirecting.txt', function (err, data) {

    var triagle = data.toString().split('\n');
    var newTriagle = triagle.slice(-triagle.length, -1).reverse();

    var conversion = function (array) {

        var result = [];
        for (i in array) {
            result.push(array[i].split(' '))
        }
        return result
    };

    var max = function (val1, val2) {

        return Math.max(Number(val1), Number(val2));
    };

    var maxSumm = function (matrix) {

        var result = [];
        for (var i = 1; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = Number(matrix[i][j]) + max(matrix[i - 1][j], matrix[i - 1][j + 1]);
                result.push(matrix[i][j])
            }
        }
        return result.slice(-1)
    }

    console.log(maxSumm(conversion(newTriagle))); // 7273
});


