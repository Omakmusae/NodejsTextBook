const x = true;
const y = false;

function a(){
    let a= 4;
    y=true
    if (x) {
        let a= 3;
        for (let i = 0; i < a; i++) {
            console.log(i);
        }
        if(!y) {
            kkk();
        }
    }
    z();
}
 
a(); //a의 호출스택에서 z에 대한 내용은 없어서 Referenceerror 발생, z는 변수에 담긴 에로우 함수여서 호이스팅 안됨
const z = () => {console.log('z')}