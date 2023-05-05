function primeNumber (number) {
    if (number % 5 == 0) {
        return "false";
    } else {
        for (let i = 2; i<=number; i++) {
            if (number % i === 1){
              return "true";  
            }
        }
    }
    return result
}

console.log(primeNumber(11));
console.log(primeNumber(13));
console.log(primeNumber(17));
console.log(primeNumber(20));
console.log(primeNumber(35));