
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



const p1 = axios.get('서버주소1')
const p2 = axios.get('서버주소2')
const p3 = axios.get('서버주소3')
const p4 = axios.get('서버주소4')
const p5 = axios.get('서버주소5')
const p6 = axios.get('서버주소6')
const p7 = axios.get('서버주소7')



