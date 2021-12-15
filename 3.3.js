// XYZ

function cetakTablePerkalian (n) {
    for (j = 1; j <= n; j++) {
        let mult = [];
        for (i = 1; i <= n; i++) {
            if (i * j < 10) {
                mult.push(i * j + " ");
            } else
            mult.push(i * j);
        }
        console.log(mult.join("  "));
    }
}

cetakTablePerkalian(7);