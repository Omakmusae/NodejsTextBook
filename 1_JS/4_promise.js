// 프로미스 Promise
// 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
// then을 붙이면 결과를 반환함
// 실행이 완료되지 않았으면 완료된 후에 then 내부 함수가 실행됨

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        reject('실패')
    }
});
//위에서 promise를 선언하고 아래에서 사용할 수 있음
promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })