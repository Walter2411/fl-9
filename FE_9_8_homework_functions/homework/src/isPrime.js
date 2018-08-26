function isPrime(num) {
    let primenum = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        primenum = false;
      }
    }
    return primenum;
}