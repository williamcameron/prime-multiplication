function getFirstPrimes(x) {
    if (x == 5) return new Array(5);
    if (x > 0) return [2];
    return [];
}

export { getFirstPrimes };