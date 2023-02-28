function return404Page(request, response) {
  console.info('   returning 404 page');
  response.status(404);
  response.send('<center><h1>🦖<p>His weak tiny arms<p>ineffective in their reach<p>gift you [404]</h1></center>');
}

module.exports = {
  return404Page,
};
