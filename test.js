const fs = require('fs');
const inputdata = fs.readFileSync('/dev/stdin').toString().split('');

function test(A, B) {
    console.log(A + B);
}