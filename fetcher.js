const http = require('http');
const fs = require('fs');
const request = require('request');
const server = http.createServer();
const PORT = 3000;

server.on('request', (req, res) => {
  const content = 'https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure';
  request(content, (error, response, body) => {
    if (error) {
      console.log(error.message);
      res.end();
    }

    fs.writeFile('/home/labber/page-fetcher/index.html', body, (error) => {
      if (error) {
        console.log(error);
        res.end();
      } else {
        console.log(`Downloaded ${content} and saved data to /home/labber/page-fetcher/index.html`)
        res.end();
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});