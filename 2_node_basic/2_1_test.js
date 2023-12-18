const value = require('./2_CommonJS_module_system')

console.log(value)
//{odd: '홀수', even: '짝수'}


console.log(this) // global? No! {} 빈객체 출력
// 그 이유는 console.log(this === module.exports === {}) 이기 때문

function a() {
	console.log(this === global)
}

a();

console.log(require)