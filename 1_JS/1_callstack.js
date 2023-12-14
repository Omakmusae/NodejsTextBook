function first() {
    second();
    console.log('첫번쨰')
}


function second() {
    third();
    console.log('두번쨰')
}


function third() {
    console.log('세번쨰')
}

first();

//stack 구조 (크롬기준) : 아래부터 쌓이고 위에서부터 실행되며 제거됨
//third()
//second()
//first()
//anonymous : 가상의 전역 컨텍스트 (항상 있다고 생각하자)
//실행 결과 : 세번째, 두번째, 첫번째
