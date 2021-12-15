// PrimeNumber

function primeNumber (number) {
    let factors = 0;
    for (i = 1; i <= number; i++) {
        if (number % i == 0) {
            factors++;
        }
    }
    if (factors <= 2) {
        console.log("Bilangan Prima");
    } else {
        console.log("Bukan Bilangan Prima");
    }
}

primeNumber(11);
primeNumber(13);
primeNumber(17);
primeNumber(20);
primeNumber(35);