// Encryption

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJ";

function ubahHuruf (sentence) {
    let len = sentence.length;
    let encrypt = [];
    for (i = 0; i < len; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (sentence[i] == alphabet[j]) {
                encrypt.push(alphabet[j + 10]);
                continue;
            }
        }
        if (sentence[i] == " ") {
            encrypt.push(" ");
        }
    }
    console.log(encrypt.join(""));
}

ubahHuruf("SEPULSA OKE");
ubahHuruf("ALTERRA ACADEMY");
ubahHuruf("INDONESIA");
ubahHuruf("GOLANG");
ubahHuruf("PROGRAMMER");