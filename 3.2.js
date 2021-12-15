// XYZ

function drawXYZ (n) {
    for (j = 0; j < n; j++) {
        let xyz = [];
        for (i = 1; i <= n; i++) {
            if ((n * j + i) % 3 == 0) {
                xyz.push("X");
            } else if ((n * j + i) % 2 != 0) {
                xyz.push("Y");
            } else {
                xyz.push("Z");
            }
        }
        console.log(xyz.join(" "));
    }
}

drawXYZ(3);
drawXYZ(5);
drawXYZ(1);