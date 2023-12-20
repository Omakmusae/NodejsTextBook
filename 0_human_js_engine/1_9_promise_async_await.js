function increaseAndPrint3(n, callback) {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
    callback(increased); // 콜백함수 호출
    }   
}

increaseAndPrint3(0, n => {
    increaseAndPrint3(n, n => {
        increaseAndPrint3(n, n => {
            increaseAndPrint3(n, n => {
                increaseAndPrint3(n, n => {
                    console.log('끝!');
                });
            console.log('네번째 끝')
        });
        console.log('세번째 끝')
        });
    console.log('두번째 끝')
    });
console.log('첫번째 끝')
});

// 1
// 2
// 3
// 4
// 5
// 끝!
// 네번째 끝
// 세번째 끝
// 두번째 끝
// 첫번째 끝

function increaseAndPrint(n, callback) {
    setTimeout(() => {
      const increased = n + 1;
      console.log(increased);
      if (callback) {
        callback(increased); // 콜백함수 호출
      }
    }, 1000);
  }

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('끝!');
                });
            console.log('네번째 끝')
        });
        console.log('세번째 끝')
        });
    console.log('두번째 끝')
    });
console.log('첫번째 끝')
});
// 1
// 첫번째 끝
// 2
// 두번째 끝
// 3
// 세번째 끝
// 4
// 네번째 끝
// 5
// 끝!


function increaseAndPrint1(n) {
return new Promise((resolve, reject)=>{
    setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    resolve(increased);
    }, 1000)
})
}

increaseAndPrint1(0)
    .then((n) => increaseAndPrint1(n))
    .then((n) => increaseAndPrint1(n))
    .then((n) => increaseAndPrint1(n))
    .then((n) => increaseAndPrint1(n)); // 체이닝 기법
// 1
// 첫번째 끝
// 2
// 두번째 끝
// 3
// 세번째 끝
// 4
// 네번째 끝
// 5
// 끝!


function findAndSaveUser (Users) {
    Users.findOne({})
        .then((user)=> {
            user.name='zero';
            return user.save();
        })
        .then((user)=> {
            return Users.findOne({gender:'m'});
        })
        .then((user) => {
            //생략
        })
        .catch(err)
}

async function findAndSaveUser2(Users) {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender:'m'});
}