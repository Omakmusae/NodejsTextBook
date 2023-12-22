
//getApple과 getBanana라는 비동기 함수가 있고, 각 함수들은 1초를 기다리고 실행됨
// await을 두번을 써서 2초를 기다리게 되는데 만일 이 두 비동기 함수가 서로 연관이 없다면, 시간낭비임

function delay() {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>resolve(), 1000);
    })
}

async function getApple() {
    await delay();
    return "apple";
}

async function getBanana() {
    await delay();;
    return "banana"
}

async function getFruites() {
    console.time()
    let a = await getApple();//1초
    let b = await getBanana();//1초
    console.log(`${a} and ${b}`);
    console.timeEnd();
}

getFruites();



  
  
async function getFruites2(){
    console.time('getFruites2');
    let getApplePromise = getApple(); // async함수를 미리 논블록킹으로 실행한다. 
    let getBananaPromise = getBanana(); // async함수를 미리 논블록킹으로 실행한다. 
    // 이렇게 하면 각각 백단에서 독립적으로 거의 동시에 실행되게 된다.
    
    console.log(getApplePromise)
    console.log(getBananaPromise)
    
    let a = await getApplePromise; // 위에서 받은 프로미스객체 결과 data를 await을 통해 꺼내는 것이다. 그이상 그이하도 아님.
    let b = await getBananaPromise; 
    
    console.log(`${a} and ! ${b}`);
    console.timeEnd('getFruites2'); // 본래라면 1초+1초 를 기다려야 하는데, 위에서 1초기다리는 함수를 바로 연속으로 비동기로 불려왔기 때문에, 대충 1.01초만 기다리면 처리된다.
}
  
getFruites2()


async function getFruites3(){
console.time();
let [ a, b ] = await Promise.all([getApple(), getBanana()]); // 구조 분해로 각 프로미스 리턴값들을 변수에 담는다.
console.log(`${a} and# ${b}`);
console.timeEnd();
}

getFruites3()
