import { getFirstPrimes } from '@/Primes';

test('sanity', () => {
    expect(true).toBe(true);
});

test('request primes returns array', () => {
    const anyInput = 0;
    expect(getFirstPrimes(anyInput)).toStrictEqual([]);
});
test('request 1 primes returns 2', () => {
    expect(getFirstPrimes(1)).toStrictEqual([2]);
});

test('request 5 returns array length 5', () => {
    expect(getFirstPrimes(5).length).toEqual(5);
})

test('request 3 primes returns first 3', () => {
    expect(getFirstPrimes(3).length).toEqual(3);
    expect(getFirstPrimes(3)).toBe([2,3,5]);
});


test('returns first 2 primes', () => {
    expect(getFirstPrimes(2)).toEqual([2,3]);
});
test('returns first 10 primes', () => {
    expect(getFirstPrimes(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
});
