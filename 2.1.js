// Score

// input
let studentScore = 80;

// process
if (studentScore >= 80 && studentScore <= 100) {
    console.log("A");
} else if (studentScore >= 65 && studentScore <= 79) {
    console.log("B+");
} else if (studentScore >= 50 && studentScore <= 64) {
    console.log("B");
} else if (studentScore >= 35 && studentScore <= 49) {
    console.log("C");
} else if (studentScore >= 0 && studentScore <= 34) {
    console.log("D");
} else {
    console.log("invalid");
}