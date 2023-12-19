function a() {
    //'use strict'; //만약 strict 모드를 사용을 위해 주석을 풀면, this는 undefined가 됨
    //ES2015 모듈에서는 strict 모드 자동 적용
    console.log(this);
}

//a()

console.log(globalThis)

//브라우저 js 의 전역은 window, 최근에 업데이트되어서 window가 globalThis 로 바뀜
// node 의 전역은 global, node도 global이 globalThis로 바뀜


console.log('-------------------------------------------------------------------------')

const obj = {
    name:'zerocho',
    sayName(){
        console.log(this.name);
        function inner() {
            console.log(this.name)
        }
        innner();
    }
}

obj.sayName() //zerocho


const sayN = obj.sayName;
sayN() //undefined





function Human (name) {
    this.name = name;
}
const xxx = new Human('zerocho')
console.log(xxx.name) //zerocho
console.log(new Human('zerocho').name) //위와 같음 zerocho


function sayName() {
    console.log(this.name)
}

sayName();//undefined
//bind는 sayName의 this에 특정 값을 지정까지만 해줌
sayName.bind({name:'zerocho'})() //zerocho
//apply 는 지정까지하고 실행까지함
sayName.apply({name:'zerocho'}) //zerocho
//apply와 비슷
sayName.call({name:'zerocho'})


const obj2 = {
    name:'zerocho',
    sayName:()=> {
        console.log(this.name);
    }
}

obj2.sayName() //undefined

const obj3 = {
    name:'zerocho',
    sayName(){
        console.log(this.name);
        function inner() {
            console.log(this.name)
        }
        inner();
    }
}

obj3.sayName()