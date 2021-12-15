// Asterisks

function playWithAsterisk (n) {
    for (j = 0; j < n; j++) {
        let ast = [];
        for (i = -1*(n-1); i <= (n-1); i++) {
            if (j % 2 == 0) {
                if (Math.abs(i) == j || (Math.abs(i) <= j && Math.abs(i) % 2 == 0)) {
                    ast.push("*");
                } else {
                    ast.push(" ");
                }
            } else {
                if (Math.abs(i) == j || (Math.abs(i) <= j && Math.abs(i) % 2 != 0)) {
                    ast.push("*");
                } else {
                    ast.push(" ");
                }
            }
        }
        console.log(ast.join(""));
    }
}

playWithAsterisk(5);