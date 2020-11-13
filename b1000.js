const fs = require('fs'); //파일 모듈 추가
const inputdata = fs.readFileSync('/dev/stdin').toString().split(' ');
//해당 경로의 파일을 읽고 문자화, 공백 기준으로 배열화 나눈다.
//inputdata[0] = A
//inputdata[1] = B
const [A, B] = inputdata; // 인풋데이터 배열을 a,b변수에 담는다.
console.log(A + B);