// ESM 모드
import {createserver} from 'http';
// 서버 구축
const server = createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});         // 응답의 Haed
    res.write('Hello node.js');                                 // 응답의 Bady
    res.end();                                                  // 응답 종료
});

// 서버 실행
server.listen(3000, ()=>{
    console.log('Server is listening on prot 3000');
});