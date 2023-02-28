function consoleLogger(request, response, next) {
  console.info('- 🦕 serving', request.method, 'for', request.url);
  next();
}


module.exports = {
  consoleLogger,
};
