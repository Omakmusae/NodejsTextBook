//노드는 js 코드를 모듈로 만들 수 있음
// 모듈 : 특정한 기능을 하는 함수나 변수들의 집합
// 모듈로 만들면 여러 프로그램에서 재사용 가능
//아래와 같이 변수를 선언하고 다른 파일에서 실행할 수 있게 객체를 module.exports에 대입 시킬 수 있음

const odd = '홀수'
const even = '짝수'


module.exports = {
    odd,
    even,
}