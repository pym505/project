//const input = ("5\n20 10 35 30 7").split("\n");
//const input = ("3\n29\n38\n12\n57\n74\n40\n85\n61\n").split("\n").map(a => parseInt(a));
//const input = ("150\n266\n427").split("\n").map(a => parseInt(a));
//const num = String(input[0] * input[1] * input[2]);
/*
let input = [3,40, 41, 42, 43, 44, 82, 83, 84, 85].map(a => parseInt(a) % parseInt(42)).filter(function(value, index, self) {
    return self.indexOf(value) === index;
});
*/
//const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

//const input = [5, 'OOXXOXXOOO', 'OOXXOOXXOO', 'OXOXOXOXOXOXOX', 'OOOOOOOOOO', 'OOOOXOOOOXOOOOX'];

const input = "5 5 50 50 70 80 100 7 100 95 90 80 70 60 50 3 70 90 80 3 70 90 81 9 100 99 98 97 96 95 94 93 91".split(" ");
let dummy = input;
dummy.shift();
//console.log(dummy);

let test_case_num = input[0];
let before_stack = 0;
let nowstack = 0;
//dummy.shift(0, 5)
//console.log(dummy);
let dummy_arr = [];
let avg = 0;


for (let i = 0; i < dummy.length; i++) {
    before_stack += nowstack + 1;
    nowstack = parseInt(dummy[i]);
    //console.log(before_stack, nowstack);
    dummy_arr = (dummy.slice(before_stack, nowstack + before_stack));
    avg = ((eval(dummy_arr.join("+")) / dummy_arr.length));
    console.log(((dummy_arr.filter(a => a > avg).length / dummy_arr.length) * 100).toFixed(3) + "%");
    //for (let j = before_stack; j < nowstack + before_stack; j++) {
    //console.log(dummy[j + 1] + "!");

    //}


    i += nowstack;
}

//let dummy = input
//dummy.shift();
/*
let stack = 0;
let sum = 0;
for (let i = 1; i <= num; i++) {
    //if (i == 0) continue;
    for (let j = 0; j < input[i].length; j++) {
        let target = input[i][j];
        if (target == "O") {
            stack++;
            sum += stack;
        } else stack = 0;
    }
    console.log(sum);
    sum = 0;
    stack = 0;
}

*/

//dummy[i] = String(dummy[i]).replace(/X/gi, '');
//console.log(dummy[i].length);
//console.log(dummy[0]);


//const input = [3, 40, 80, 60];


/*
let dummy = input;
dummy.shift();
let M = parseInt(Math.max.apply(null, dummy));

dummy = dummy.map(a => (parseInt(a) / M) * 100);
//console.log(dummy);
let re = (eval(dummy.join("+")) / dummy.length).toFixed(2);
*/




//console.log(input.length);
//console.log(input[2]);
//console.log(num.length)
//const num = input.length;
//let cntn = [].map(a => 0);
//console.log(cntn[1])