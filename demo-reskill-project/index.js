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
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)
    let contentType = getContentType(filePath) || 'text/html'
    let emptyPagePath = path.join(__dirname, 'public', '404.html')
    fs.readFile(filePath, 'utf8', (err, content) => {
        if(err) {
            if(err.code === 'ENDENT') {
                fs.readFile(emptyPagePath, 'utf8', (err, content) => {
                    response.writeHead(200, {'Content-type': contentType})
                    response.end(content)
                })
            } else {
                response.writeHead(500)
                response.end('A server error has occured')
            }
        }

        if (!err) {
           response.writeHead(200, {'Content-Type': contentType})
           response.end(content)
        }
    })
})

const getContentType = (filePath) => {
    let extName = path.extname(filePath)
    if (extName === '.js') {
        return 'text/javascript'
    }
    if (extName === '.css') {
        return 'text/css'
    }
    if (extName === '.png') {
        return 'image/png'
    }
    if (extName === '.jpg') {
        return 'image/jpg'
    }
}

//prompts server to listen
const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
