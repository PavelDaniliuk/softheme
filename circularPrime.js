var isPrime = function (number) {
    var maxNumber = Math.ceil(Math.sqrt(number));
    var i = 2;
    var isPrime = true;

    while (i <= maxNumber) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    return isPrime
}

var checkCircularPrimes = function (numberToCheck) {
    var convertedNumber = numberToCheck.toString();
    var convertedNumberLength = convertedNumber.length;
    var isNumberPrime = true;

    for (var j = 0; j < convertedNumberLength; j++) {
        var newNumber = [];

        for (var i = 1; i < convertedNumberLength; i++) {
            newNumber[i - 1] = convertedNumber[i]
        }

        newNumber[convertedNumberLength - 1] = convertedNumber[0]

        if (!isPrime(Number(newNumber.join('')))) {
            isNumberPrime = false;
            break;
        }
        convertedNumber = newNumber;
    }
    return isNumberPrime;
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
    var primes = arrayPrimes(n);
    var arrayPrimesLength = primes.length;

    for (var i = 2; i <= arrayPrimesLength; i++) {

        if (primes[i] !== false) {
            if (checkCircularPrimes(i)) {
                total++;
            }
        }
    }
    return total
}
console.log(summCircularPrimes(1000000))


