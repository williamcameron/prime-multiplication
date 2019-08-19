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

function getFirstPrimes(numberToFetch) {

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

export { getFirstPrimes, isPrime };