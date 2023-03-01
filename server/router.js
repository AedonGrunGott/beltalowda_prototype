const express = require('express');
const path = require('path');

const router = express.Router();

const controllers = require('./controllers');


router.use('/', express.static(path.join(__dirname, '../client/dist')));
router.use('/images', express.static(path.join(__dirname, '../client/images')));
router.use('/sounds', express.static(path.join(__dirname, '../client/sounds')));
router.get('*', controllers.return404Page);


module.exports = {
  router,
};
