
const obj3 = {
    name:'zerocho',
    sayName(){
        console.log(this.name);// zerocho
        function inner() {
            console.log(this.name)//undefined
        }
        inner();
    }
}

obj3.sayName()