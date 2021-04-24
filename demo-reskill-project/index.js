const path = require('path');
const fs = require('fs');
const http = require('http');

/**  
 *
 *Http Status code
 * 
 * 200 - Successfull retrieval
 * 2011 - Successfull creation
 * 
 * 300 - Bad Redirect
 * 301 - Forbidden
 * 
 * 500 - Server error
 */

//arguments allow capturing and returning info to user
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        let filePath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
        })
    }
    if(request.url === '/index2.html') {
        let filePath = path.join(__dirname, 'public', 'index2.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
        })
    }
})
//prompts server to listen
const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
