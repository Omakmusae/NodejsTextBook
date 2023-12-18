// 프로미스 Promise
// 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
// then을 붙이면 결과를 반환함
// 실행이 완료되지 않았으면 완료된 후에 then 내부 함수가 실행됨

// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve('성공');
//     } else {
//         reject('실패')
//     }
// });

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// delay 비동기 함수를 콜백으로 실행한 코드
function delay(sec, callback) {
    setTimeout(()=> {
        callback(new Date().toISOString());
    }, sec*1000)
}
console.log('start  ', new Date().toISOString())

// delay(1, (result) => {
//     console.log(1, result)
//     delay(1, (result) => {
//         console.log(2, result)
//         delay(1, (result) => {
//             console.log(3, result)
//         })
//     })
// })

console.log('hello')

function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(new Date().toISOString());
        }, sec*1000)
    })
}


delayP(1).then((result) => {
    console.log(0, result)
    //return delayP(1);
}).then((result) => {
    console.log(2, result)
    //return delayP(3);
}).then((result)=> {
    console.log(4, result)
    return 'wow'
}).then((result) => {
    console.log(result)
});

