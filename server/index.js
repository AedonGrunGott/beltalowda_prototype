require('dotenv').config();
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const { Message, User, database } = require('../database');
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
    createMessage(JSON.parse(msg));
    ioSocket.emit('message', msg);
  });
});

ioSocket.on('connect_error', (error) => {
  console.error(error);
});

// DB Junks
const getMessages = async () => Message.find({}).exec();
expressServer.get('/messages', async (req, res) => {
  const data = await getMessages();
  res.send(data);
});
const deleteAllMessages = async () => {
  Message.deleteMany({})
    .then(() => console.info('DATABASE: deleted all messages'))
    .catch((error) => console.error(error));
};
deleteAllMessages();
const createMessage = (message) => {
  console.log('DATABASE: creating...', message.message, message.sender);
  Message.create({ message: message.message, sender: message.sender })
    .catch((error) => console.error(error));
};

const deleteAllUsers = async () => {
  User.deleteMany({})
    .then(() => console.info('DATABASE: deleted all users'))
    .catch((error) => console.error(error));
};
const createUser = (user) => {
  console.log('DATABASE: creating...', user.name, user.level);
  User.create({ name: user.name, level: user.level, faction: user.faction })
    .catch((error) => console.error(error));
};
const getUsers = async () => User.find({}).exec();
expressServer.get('/users', async (req, res) => {
  const data = await getUsers();
  res.send(data);
});
deleteAllUsers();
createUser({ name: 'August', level: 4, faction: 'belter' });

// SERVER
expressServer.use(express.json());
expressServer.use(consoleLogger);
expressServer.use(router);

httpServer.listen(process.env.SERVER_PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else {
    console.info('=== SERVER ON', '='.repeat(42));
    console.info(`SERVER: Listening at http://${process.env.SERVER_URL}:${process.env.SERVER_PORT}`);
  }
});
