import express from "express";
import http from "http";
import {Server as SocketServer} from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server,{
    cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("message", (message) => {
      socket.broadcast.emit("message", message);
    });
  });

server.listen(4000);
console.log("Server on port ", 4000)