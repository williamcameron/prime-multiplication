function getFirstPrimes(numberToFetch) {
    if (typeof numberToFetch !== 'number' || parseInt(numberToFetch) <= 0) {
        return [];
    }

    let primes = [];
    let checkingNumber = 2;

    while (primes.length < numberToFetch) {
        if (isPrime(checkingNumber)) {
            primes.push(checkingNumber);
        }
        checkingNumber++;
    }
    return primes;

}

function isPrime(number) {
    if (typeof number !== 'number' || parseInt(number) <= 0) {
        return false;
    }
    if (number < 2) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

export { getFirstPrimes, isPrime };