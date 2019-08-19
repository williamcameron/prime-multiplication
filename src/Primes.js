function getFirstPrimes_TrialDivision(numberToFetch) {
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

function getFirstPrimes_Refactor(numberToFetch) {

    if (typeof numberToFetch !== 'number' || parseInt(numberToFetch) <= 0) {
        return [];
    }

    let primes = [2];
    let c;
    let currentNumber = 3; // Start at 3
    for (let numberFound = 2; numberFound <= numberToFetch;) {
        for (c = 2; c <= currentNumber - 1; c++) {
            if (currentNumber % c == 0)
                break;
        }
        if (c == currentNumber) {
            primes.push(currentNumber);
            numberFound++;
        }
        currentNumber += 2; // increment in 2's to only check odds
    }

    return primes;
}

function getFirstPrimes(numberToFetch) {
    numberToFetch *= 15; // Add buffer, as algrithm finds up to X
    let primes = [];

    for (let i = 0; i < numberToFetch; i++) {
        primes[i] = 1;
    }
    primes[0] = 0;
    primes[1] = 0;

    for (let i = 2; i <= Math.sqrt(numberToFetch); i++) {
        if (primes[i]) {
            for (let j = 2; i * j <= numberToFetch; j++) {
                primes[i * j] = 0;
            }
        }
    }

    // Let's filter down only the primes
    let result = [];
    primes.forEach((v, k) => {
        if (v == true) {
            result.push(k);
        }
    });
    return result.splice(0, numberToFetch / 15); // Slice X back to the size we need
}

export { getFirstPrimes, isPrime };