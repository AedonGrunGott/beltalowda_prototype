require('dotenv').config();
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const { router } = require('./router');
const { consoleLogger } = require('./logger');

const expressServer = express();

const httpServer = http.createServer(expressServer);
const ioSocket = new Server(httpServer);

ioSocket.on('connection', (socket) => {
  console.log('SOCKET: a user connected');
  socket.on('disconnect', () => {
    console.log('SOCKET: user disconnected');
  });
  socket.on('message', (msg) => {
    console.log('SOCKET: ', msg);
    ioSocket.emit('message', msg);
  });
});

ioSocket.on('connect_error', (error) => {
  console.error(error);
});

expressServer.use(consoleLogger);
expressServer.use(router);

httpServer.listen(process.env.SERVER_PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else {
    console.clear();
    console.info('=== SERVER ON', '='.repeat(42));
    console.info(`SERVER: Listening at http://${process.env.SERVER_URL}:${process.env.SERVER_PORT}`);
  }
});
