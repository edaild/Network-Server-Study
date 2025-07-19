import express from 'express';     // express 를 가져온다
import path from 'path';

const __dirname = path.resolve();

const app = express();

// middleware
app.get('/',(req, res)=>{
// HTML 파일 전송
res.sendFile(__dirname + '/public/main.html');
});

app.listen(3000, () =>{
    console.log('Server is running');
});