// Mean and Median

function meanMedian (arrayinput) {
    let len = arrayinput.length;

    // mean
    let sum = 0;
    for (i = 0; i < len; i++) {
        sum = sum + arrayinput[i];
    }
    let mean = sum / len;

    // median
    let median = 0;
    if (len % 2 == 0) {
        median = (arrayinput[len/2-1] + arrayinput[len/2])/2;
    } else {
        median = arrayinput[(len-1)/2];
    }
    console.log([mean, median].join(" "));
}

meanMedian([1,2,3,4]);
meanMedian([1,2,3,4,5]);
meanMedian([7,8,9,13,15]);
meanMedian([10,20,30,40,50]);
meanMedian([15,20,30,60,120]);