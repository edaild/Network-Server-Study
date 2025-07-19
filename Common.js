// CJS 모드

// nodejs 내부 http 모듈 사용
const http = require('http');

// 서버 구축
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});         // 응답의 Haed
    res.write('Hello node.js');                                 // 응답의 Bady
    res.end();                                                  // 응답 종료
});

// 서버 실행
server.listen(3000, ()=>{
    console.log('Server is listening on prot 3000');
});