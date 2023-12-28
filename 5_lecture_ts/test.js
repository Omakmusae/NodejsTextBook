"use strict";
// b 객체의 hello에 대해 type 명시
const b = { hello: 'world' };
// 아래는 hello 값을 보고서 타입스크립트가 hello의 값은 string이라고 type을 추론함
const b2 = { hello: 'world' };
const b3 = { hello: 'interface' }; //world에 ?가 있어서 b3에 world를 안넣어도 에러가 안남
const b4 = { hello: 'interface', world: 123 };
const c = { hello: 'type' };
