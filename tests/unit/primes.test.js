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
