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
    let num = parseInt(input[0]);
    // let A = 0;
    // let B = 0;
    let dummy = "";

    for (let i = 1; i <= num; i++) {
        //A = input[i].split(' ')[0];
        //B = input[i].split(' ')[1];
        //console.log(A + B);
        dummy = input[i].split(' ')[0] + input[i].split(' ')[1];
        console.log(`Case #${i}: ${dummy}`);
    }

    process.exit();
});
*/

//const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
//const input = require('fs').readFileSync('dev/stdin').toString().split("\n");
//const input = require('fs').readFileSync('dev/stdin').toString().split("\n");
//const input = 2;
/*
let num = parseInt(input[0]);
//let dummy = 0;
let dummy = [];
let numbers = "";
*/
//let re = "";
//re += i + "\n";
//const input = require('fs').readFileSync('dev/stdin').toString();
//const input = 5;

const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let i = 0;
let dummy = [];

while (input[i] != null) {
    dummy = input[i].split(" ");
    //if (parseInt(dummy[0]) == 0) break;
    console.log(parseInt(dummy[0]) + parseInt(dummy[1]));
    i++;
}

/*
for (let i = 0; i < dummy[0]; i++) {
    if (parseInt(dummy[1]) > dummy2[i]) {
        dummy3 += dummy2[i] + " ";
    }
}
console.log(dummy3);
*/

/*
let re = "";
for (let i = 1; i <= starnum; i++) {
    re = block.substring(0, starnum - i);
    re += (star.substring(0, i));
    console.log(re);
}
*/

/*
for (let i = 1; i <= input[0]; i++) {
    let num = input[i].split(' ');
    console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${parseInt(num[0]) + parseInt(num[1])}`);
}
*/
//console.log(re);
/*
 */
//dummy += i;
//if (i = !1) dummy += "\n";
//const input = 5;
//let dummy = "";

/*
for (let i = 1; i <= num; i++) {
    dummy = input[i].split(' ');
    numbers += parseInt(dummy[0]) + parseInt(dummy[1]) + "\n";
}
console.log(numbers);
*/



//console.log(`${num} * ${i} = ${num * i}`);