function getGDB(n, m) {
    let max = n > m ? n : m;
    let GDB;
    for (let i = 1; i <= max; i++) {
        if (n % i === 0 && m % i === 0) {
            GDB = i;
        }
    }
    return GDB;
}

document.write(`308과 20의 최대공약수 : ${getGDB(308, 20)}<br>`);
document.write(`45과 38의 최대공약수 : ${getGDB(45, 38)}`);
