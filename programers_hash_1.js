//해시테이블문제1문이다 첫번째로 해시를사용하는데 객체를하나만들어 해당해시의 값을조절하여 답을출력한다

function solution(p, c) {
    //var answer = '';
    let r = [];
    //객체생성

    for (let i in p) {
        r[p[i]] = 0;
    }
    //참가자만큼의값초기화

    for (let i in p) {
        r[p[i]]++;
    }
    //참가자만큼의값을++해준다. 왜냐면중복되는사람도있으므로 A가3번 중복참가인데 완주에서2번밖에안나오면
    // 절대값으로하면에러

    for (let i in c) {
        r[c[i]]--;
    }
    //참가자값을-- 해준다 

    for (let i in r) {
        if (r[i] > 0) {
            return i;
        }
    }

    //값이0 이상이면리턴해준다
    //return answer;
}