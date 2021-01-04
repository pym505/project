//해시테이블문제3문이다 

//옷 종류를받은후, 옷조합을맞추는 새는 로직을짜보자 시간이없어서 그냥js로짯다

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