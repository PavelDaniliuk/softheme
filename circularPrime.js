var isPrime = function (number) {
    var maxNumber = Math.ceil(Math.sqrt(number));
    var i = 2;

    while (i <= maxNumber) {
        if (number % i == 0) {
            return false
        }
        i++;
    }
    return true
}

var checkCircularPrimes = function (n) {
    var arrCircle = n.toString();
    var arrLength = arrCircle.length;

    for (var j = 0; j < arrLength; j++) {
        var newArr = [];

        for (var i = 1; i < arrLength; i++) {
            newArr[i - 1] = arrCircle[i]
        }

        newArr[arrLength - 1] = arrCircle[0]

        if (!isPrime(Number(newArr.join('')))) {
            return false
        }
        arrCircle = newArr;
    }
    return true
}

var arrayPrimes = function (number) {
    var array = [];

    for (var i = 2; i < number; i++) {
        array[i] = true;
    }
    var c = 2;

    while (c * c < number) {

        for (var i = c * 2; i < number; i += c) {
            array[i] = false;
        }

        for (var i = c + 1; i < number; i++) {
            if (array[i]) break;
        }
        c = i;
    }
    return array
}

var summCircularPrimes = function (n) {
    var total = 0;
    var data = arrayPrimes(n);

    for (var i = 2; i <= data.length; i++) {
        if (data[i] !== false) {
            if (checkCircularPrimes(i)) {
                total++;
            }
        }
    }
    return total
}
console.log(summCircularPrimes(3))


