const number = parseInt(prompt("자연수를 입력하세요."));
let isPrime; //소수인지의 여부를 지정.

if (number === 1) {
    document.write(`${number}은 소수도 합성수도 아닙니다.`);
} else if (number === 2) {
    isPrime = true;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
}

if (isPrime) {
    document.write(`${number}은 소수입니다.`);
} else {
    document.write(`${number}은 합성수입니다.`);
}
