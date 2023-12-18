var btns= [
    document.getElementById('btn0'),
    document.getElementById('btn1'),
    document.getElementById('btn2')
];

function setClick() {
    for (var i = 0; i < 3; i++) {
        btns[i].onclick = function() {
            console.log(i)
        }
    }
}

setClick()
//console.log(i)에서 i는 3으로 출력됨, var의 함수 스코프 때문!


var btns= [
    document.getElementById('btn0'),
    document.getElementById('btn1'),
    document.getElementById('btn2')
];

function setClick() {
    for (let i = 0; i < 3; i++) {
        btns[i].onclick = function() {
            console.log(i)
        }
    }
}

setClick()
//console.log(i)에서 i는 0,1,2으로 의도대로 출력됨