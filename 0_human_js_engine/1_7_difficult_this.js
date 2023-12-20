const header = document.querySelector('페이지')
header.addEventListener('click', function() {
    console.log(this);
})
//위의 this는 header로 출력됨, why? this는 호출될떄 결정된다 했는데 window나 global이 아님
//addEventListener가 호출되고 그 안에 있는 함수는 아직 호출 안됨!
//그래서 addEventListener 함수 내부를 확인해야함 언제 함수가 호출되는지 알아야 this를 알 수 있음

// addEventListener 함수를 유추해보면 (원본은 C++로 되어있을 것)
const header로 = {
    addEventListener : function(eventName, callback) {
        //이 안을 유추해보면
        callback(); //this가 window 인 경우이므로 틀림
        callback.call(header); //this가 header 이므로 이 경우일것
        callback.call(this)
    } 
}
