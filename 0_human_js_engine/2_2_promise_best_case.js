
//1초 뒤에 자동 실행
//결과를 바로 받고싶지 않아도 받을 수 밖에 없음
setTimeout(()=> {
    let data = '10초';
    console.log(data)
}, 10000)


//하지만 promise를 쓰면 변수에 담아서 then을 이용해 우리가 결과를 사용하고싶을 때, 사용할 수 있음
const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let data = 'promise 1초'
        resolve(data);
    }, 0)
})


promise.then((resolve) => {
    console.log(resolve)
})



