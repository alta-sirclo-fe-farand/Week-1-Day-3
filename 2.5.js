// Exponentiation

function exponentiation (x, n) {
    if (n < 0) {
        console.log("Wrong input");
    } else {
        expNum = 1;
        for (i = 1; i <= n; i++) {
            expNum = expNum * x;
        }
        console.log(expNum);
    }  
}

exponentiation(2, 3);
exponentiation(2, 12);
exponentiation(7, 2);
exponentiation(9, 3);
exponentiation(22, 5);
exponentiation(1996, 0);
exponentiation(4213, -3);