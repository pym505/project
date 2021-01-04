//해시테이블문제1문이다 첫번째로 해시를사용하는데 객체를하나만들어 해당해시의 값을조절하여 답을출력한다

function solution(c) {
    let r = {};
    for (let i in c) {
        let ca = c[i][c[i].length - 1];
        //let target = c[i][0];
        //r[ca] = 1; // 옷벗는
        if (!r[ca]) r[ca] = 1 + 1;
        else r[ca]++;
    }
    let re = 1;
    for (let i in r) {
        re *= r[i];

    }
    re -= 1;

    return re;
}