let inch = parseFloat(prompt("변환할 인치"));
let cm;

cm = (inch * 2.54).toFixed(1);
alert(`인치 ${inch}는 센티미터 ${cm}입니다.`);
