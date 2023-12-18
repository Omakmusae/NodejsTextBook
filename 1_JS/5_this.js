var someone = {
    name : 'codejong',
    whoAmI : function() {
        console.log(this)
    }
}

someone.whoAmI();
//{ name: 'codejong', whoAmI: [Function: whoAmI] } 출력
// someone.whoAmI를 호출할 때, 함수 내부 메소드를 직접 호출했으므로 메소드 내부에서의 this는 함수가 됨
var myWhoAmI = someone.whoAmI;
myWhoAmI();
//global Object 객체가 출력
//myWhoAmI 는 전역 스코프에서 선언되었으므로, 호출했을 경우 global에서 호출되므로 this는 global이 됨.

var btn = document.getElementById('btn');
btn.addEventListener('click', someone.whoAmI);
//여기서 this 는 버튼
//즉 js에서 this는 호출한 놈 === this 가 됨!

var bindedWhoAmI = myWhoAmI.bind(someone);
var btn = document.getElementById('btn');
btn.addEventListener('click', someone.whoAmI);
//someone의 this가 함수로 binding 되어있어 어떻게 호출해도 this는 고정
//js에서는 선언할 때 결정되는게 있고, 호출할 때 결정되는것이 있음
// this는 호출 할 때 결정됨
//this 는 호출한 객체가 됨
// 이 this를 예외적으로 호출과 무관하게 고정시킬 수 있는 방법은 bind라는 함수를 이용하여 고정 할 수 있음