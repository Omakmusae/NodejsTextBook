const http = require('http')
const fs = require('fs').promises
let PORT = 5000
http.createServer(async (req, res) => {
    //사파리 같은 브라우저는 아래 head에 작성해줘야 html이라고 인식함, 또한 한글을 인식하기 위해 chcarset 설정
    try {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        const data = await fs.readFile('./server.html');
        res.end(data);
    } catch (error) {
        console.error(error)
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
        res.end(error.message)
    }
    
})
    .listen(PORT, () => {
        console.log(`${PORT} 번 포트에서 서버 대기 중`)
    })