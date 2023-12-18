//아래 예제는 node js가 싱글 콜 스택을 가지고 있는걸 보여주는 예제
//setTimeout은 node js에서 실행되는게 아닌 백그라운드에서 실행되고
//기존에 쌓여있던 stack이 모두 실행되고 그 다음 큐에서 setTimeout의 실행 내용이 call stack으로 넘어와 실행됨
//그래서 1.5초 타이머끝 출력이 맨 마지막에 출력됨
function yo() {
    setTimeout(function() {
        console.log('1.5초 타이머 끝!')
    },1000)
    for (let i = 0; i <3; i++) {
        doSomething();
        console.log(i)
    }
    console.log('3초 걸리는 for문 끝!')
}
yo();


function doSomething() {
    console.log('무엇인가를 한다')
}

console.log('main 끝!')