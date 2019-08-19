import { getFirstPrimes, isPrime } from '@/Primes';

test('sanity', () => {
    expect(true).toBe(true);
});

describe('Testing getFirstPrimes function', () => {

    test('request primes returns array', () => {
        const anyInput = 0;
        expect(getFirstPrimes(anyInput)).toStrictEqual([]);
    });
    test('request 1 primes returns 2', () => {
        expect(getFirstPrimes(1)).toEqual([2]);
    });

    test('request 5 returns array length 5', () => {
        expect(getFirstPrimes(5).length).toEqual(5);
    })

    test('request 3 primes returns first 3', () => {
        expect(getFirstPrimes(3).length).toEqual(3);
        expect(getFirstPrimes(3)).toEqual([2,3,5]);
    });

    test('returns first 2 primes', () => {
        expect(getFirstPrimes(2)).toEqual([2,3]);
    });
    test('returns first 10 primes', () => {
        expect(getFirstPrimes(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
    });

    test('returns nothing for string input', () => {
        expect(getFirstPrimes('string input')).toEqual([]);
    });

    test('returns blank array for negative input', () => {
        expect(getFirstPrimes(-1)).toEqual([]);
    });


    /* Stress testing from brief */
    test('request large number of  primes returns correct length timely 1000', () => {
        expect(getFirstPrimes(1000).length).toEqual(1000);
    });
    test('request large number of  primes returns correct length timely 2500', () => {
        expect(getFirstPrimes(2500).length).toEqual(2500);
    });
    test('request large number of  primes returns correct length timely 5000', () => {
        expect(getFirstPrimes(5000).length).toEqual(5000);
    });
    test('request large number of  primes returns correct length timely 10000', () => {
        expect(getFirstPrimes(10000).length).toEqual(10000);
    });


});

describe('Testing isPrime function', () => {
    test('returns true for 2', () => {
        expect(isPrime(2)).toBeTruthy();
    });
    test('returns false for 4', () => {
        expect(isPrime(4)).toBe(false);
    });
    test('returns false for 1', () => {
        expect(isPrime(1)).toBeFalsy();
    });
    test('returns true for 29', () => {
        expect(isPrime(29)).toBeTruthy();
    });
    test('returns false for string', () => {
        expect(isPrime('some string')).toBe(false);
    });
    test('returns false for negative', () => {
        expect(isPrime(-10)).toBe(false);
    });
    
});