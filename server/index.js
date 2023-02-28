require('dotenv').config();
const express = require('express');

const { router } = require('./router');
const { consoleLogger } = require('./logger');

const server = express();
server.use(consoleLogger);
server.use(router);

server.listen(process.env.SERVER_PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else {
    console.clear();
    console.info('=== SERVER ON', '='.repeat(42));
    console.info(`SERVER: Listening at http://${process.env.SERVER_URL}:${process.env.SERVER_PORT}`);
  }
});
