/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
        let H = parseInt(input.split(" ")[0]);
        let M = parseInt(input.split(" ")[1);
            if (M - 45 <= 0) {
                H--;
                M = M + 60 - 45
            } else M= M - 45;

            if (H - 1 <= 0) {
                H = 23;
            }

            let re = 0;

    console.log(re);
    process.exit();
});
*/

//const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//const input = "12\n11".toString().split('\n');

const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
//let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let H = parseInt(input[0]);
let M = parseInt(input[1]);

M -= 45;

if (M < 0) {
    M += 60;
    H--;

    if (H === -1) {
        H = 23;
    }
}

console.log(H + ' ' + M);


/*
if (H - 1 <= 0) {
    H = 23;
}
*/

console.log(H + " " + M);




//const B = parseInt(input[1]);
//let re = 0;

//윤년의 조건은 4의 배수면서 100의 배수가 아닐 때 or 400의 배수일 때
/*
if ((x > 0) && (y > 0)) re = 1;
else if ((x < 0) && (y < 0)) re = 2;
else if ((x < 0) && (y > 0)) re = 3;
else re = 4;
*/


/*
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) console.log("1");
else console.log("0");

if ((A >= 90) && (A <= 100)) console.log("A");
else if ((A >= 80) && (A < 90)) console.log("B");
else if ((A >= 70) && (A < 80)) console.log("C");
else if ((A >= 60) && (A < 70)) console.log("D");
else console.log("F");
*/