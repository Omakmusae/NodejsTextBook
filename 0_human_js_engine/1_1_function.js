const add = (a,b) => a+b;
//const add = (a,b) => {a+b}; 이렇게 선언하면 {a+b}가 함수의 return이 아니라 함수의 body로 인식
//함수의 return으로 선언하려면 ({a+b}) 처럼 괄호 () 로 return할 객체를 감싸야함
function calculator(func, a,b) {
    return func(a,b);
}

console.log(add(3,5)) //8
console.log(calculator(add,3,5)) // 8
//calculator 함수의 매개변수에 add 함수를 넣음
//console.log(calculator(add(),3,5)) // TypeError, func is not a function
//함수의 매개변수에 add() 호출을 넣음
//함수와 함수 호출은 차이가 있음!

const x = 'x'; //없애면 c에서 x를 출력하면 reference error
function c() {
    const y= 'y';
    console.log('c   ', x)
}

function a() {
    const x = 'xxx'
    console.log('a   ', x)
    function b() {
        const z = 'z';
        console.log('b   ', x);
        c();
    }
    b();
}

a();
c();