
// const obj3 = {
//     name:'zerocho',
//     sayName(){
//         console.log(this.name);// zerocho
//         function inner() {
//             console.log(this.name)//undefined
//         }
//         inner();
//     }
// }

// obj3.sayName()



// console.log('Start!')

// Promise.resolve('Promise!')
//     .then(res => console.log(res))

// setTimeout(()=> {
//     console.log('TimeOut!')
// },0)

// console.log('End!')

function doSomething() {
    return new Promise((resolve, reject) => {
        resolve(100)
    });
  }

