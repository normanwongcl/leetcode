interface Cache {
    [key: number]: number;
}

// Using memoization to cache computed answer
const fib = (n:number):number => {
    const memoize:Cache = {};
    
    for (let i = 0; i <= n; i++) {
        if (i < 2)   memoize[i] = i;
        else memoize[i] = memoize[i-2] + memoize[i-1];
    }
    
    return memoize[n];
}