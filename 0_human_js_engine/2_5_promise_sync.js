let a = 2;

//new Promise가 실행되면서 Promise 안의 코드는 동기적으로 실행됨, 그 결과를 resolve에 넣음
const p = new Promise((resolve, reject) => {
    console.log('제일 먼저 실행')
    //동기
    setTimeout(() => {
        a = 5;
        console.log(a)
        resolve(a);
    },0)
})

console.log('딴짓')

p.then((result) => {//프로미스 핸들러 -> 
    console.log('result 는 ', result)
})


//프로미스 핸들러는 프로미스의 상태에 따라 실행되는 콜백 함수
