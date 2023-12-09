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

//stack 구조 (크롬기준)
//third()
//second()
//first()
//anonymous
//실행 결과 : 세번째, 두번째, 첫번째
