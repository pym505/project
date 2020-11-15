//const input = ("1 1\n2 3\n3 4\n9 8\n5 2\n").split("\n");
//console.log(input.length + "aa");
//const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
//const input = 26;
//let dummy = 0;
//let input = org_input = require('fs').readFileSync('dev/stdin').toString();
let N = n = 26;
let i = 0;
//let dummy2 = 0;

while (1) {
    //input = parseInt(((input % 10) * 11)) + parseInt((Math.floor(input / 10)));
    //if (org_input == input) break;
    N = (Math.floor(N / 10) + N % 10) % 10 + N % 10 * 10;
    i++;
    if (n == N) break;
}
console.log(i);
/*
    if (i == 0) dummy2 = input;
    else dummy2 = dummy;
    let i_A = parseInt(dummy2) % 10; //1의자리
    let i_AA = Math.floor(parseInt(dummy2) / 10)
    //console.log(i_A + "," + i_AA);
    dummy2 = i_A + i_AA;
    if (dummy2 > 9) {
        dummy2 -= 10;
    }
    dummy = String(i_A) + String(dummy2);
    //console.log(i_A + " + " + dummy2 + " = " + dummy);
    i++;
    //console.log("i= " + i);
}
*/
//2+6  8이다.
//if (dummy2 > 9)
//6, 6 + 2
//68
//80 + 4
//정답은 같지만 방법이 다른 승환형 답은
// 10자리는 a/10 나머지 *10 + 1자리는 a/10 나머지 + a/10의 몫
//88 
/*
    let dummy = input[i].split(" ");
    let dummy2 = parseInt(dummy[0]) + parseInt(dummy[1]);
    if (dummy2) console.log(dummy2);
    re += dummy2 + "\n";
    i++;
    */
//console.log(re);