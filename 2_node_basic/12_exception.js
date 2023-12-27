process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err)
});


setInterval(() => {
    throw new Error('서버를 고장내주마!')
    console.log('시작')
}, 1000);




setInterval(() => {
    console.log('시작')
    try {
        throw new Error('서버를 고장내주마!')
    } catch (error) {
        console.error(error)
    }
}, 1000);


