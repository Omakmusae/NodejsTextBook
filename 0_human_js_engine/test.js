
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


function getDB() {
    let data;
    setTimeout( () => {
        data = 1000;
    }, 3000);
    return data;
}

function getDBCallback(callback) {
    let data;
    setTimeout( () => {
        data = 1000;
        callback(data)
    }, 3000);
}

function getDBPromise() {
    return new Promise((resolve) => {
        setTimeout( () => {
            let data = 1000;
            resolve(data)
        }, 3000);
    })
   

}


function getDBAwait() {
    return new Promise((resolve, reject)=> {
        setTimeout( () => {
            let data = 1000;
            resolve(data);
        }, 3000);
    });
}


async function main () {
    let data = getDB();
    data+=2;
    console.log('data의 값 : ', data);

    let dataCallback = await getDBCallback(function (data) {
        let value = data+2;
        console.log('dataCallback의 값 : ', value);
    });

    let dataPromise = await getDBPromise();
    dataPromise+=2;
    console.log('dataPromise의 값 : ', dataPromise);

    let dataAwait = await getDBAwait();
    dataAwait+=2;
    console.log('dataAwait의 값 : ', dataAwait);
}


main();
