let userNumber = prompt("숫자를 입력하세요.");

if (userNumber !== null) {
    userNumber = parseInt(userNumber);
    if (userNumber % 2 === 0) {
        alert("짝수입니다.");
    } else {
        alert("홀수입니다.");
    }
}
