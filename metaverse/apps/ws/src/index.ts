import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;

  ws.on('error', console.error);
});