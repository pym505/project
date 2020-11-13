//const fs = require('fs'); //파일 모듈 추가
//const inputData = fs.readFileSync().toString().split(' ').map(value => +value);
//해당 경로의 파일을 읽고 문자화, 공백 기준으로 배열화 나눈다.
//inputdata[0] = A
//inputdata[1] = B
//const [A, B] = inputData; // 인풋데이터 배열을 a,b변수에 담는다.
//let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

//const sss = "2902"
//console.log(sss[1]);

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const B_1 = B % 10; // 일의 자리를 구할때 10으로 나눈 나머지!!
const B_10 = Math.floor((B % 100) / 10); //10자리
const B_100 = Math.floor(B / 100); //100자리

console.log(A * B_1);
console.log(A * B_10);
console.log(A * B_100);
console.log(A * B);



/*
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log((A % C) * (B % C) % C);
*/
//ok
//return 값을 못보니깐..데이타를 땡겨오는지 아닌지 모르겟다
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/


//리드라인 안에 리드라인 헤더를 호출?한다.
// rl 안에 리드라인.크리에이트 인터페이스 온 펑션을 넣는다.넣는다.

/*
rl.on('line', function(line) {
    const input = line.split(' ');
    let result = Number([input[0]]) + Number(input[1]);
    console.log(result);
    result = Number([input[0]]) - Number(input[1]);
    console.log(result);
    result = Number([input[0]]) * Number(input[1]);
    console.log(result);
    result = Number([input[0]]) / Number(input[1]);
    console.log(result);
    result = Number([input[0]]) % Number(input[1]);
    console.log(result);
    rl.close();
}).on("close", function() {
    process.exit();
});
*/
//rl 온 펑션 안에 인풋 요소를 스플릿 후, 넘버를 합하고 로그를 보낸다.
//아무래도 이걸 만든 사람은 웹 전문인듯