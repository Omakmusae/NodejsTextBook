// b 객체의 hello에 대해 type 명시
const b:{hello:string} = {hello:'world'}
// 아래는 hello 값을 보고서 타입스크립트가 hello의 값은 string이라고 type을 추론함
const b2 = {hello:'world'}

//객체를 인터페이스로 타이핑할 수 있음 (인터페이스는 객체!)
interface Inter {
    hello:string;
    world?:number; // ?를 붙이면 world가 있어도 그만 없어도 그만인 속성
}
const b3:Inter = {hello:'interface'}; //world에 ?가 있어서 b3에 world를 안넣어도 에러가 안남
const b4:Inter = {hello:'interface', world:123};

type Type = {
    hello:string;
    func?:(param?:boolean) => void; //함수는 이런식으로 타이핑 가능
}
const c :Type  = {hello:'type'}