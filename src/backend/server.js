const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

server.listen(3000, () => {
  console.log('server listening on port 3000')
})
