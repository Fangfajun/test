const express = require('express');
const WebSocket = require('ws');
const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('A client connected to the server.');

    ws.on('message', (message) => {
        if (message instanceof ArrayBuffer) {
            console.log('Received video frame.');
            // 在这里处理视频数据
            // 可以保存到文件系统，进行分析，或者转发给其他客户端
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected.');
    });
});

app.use(express.static(__dirname));
server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});