const http = require('http');
const url = require('url');

const server = http.createServer();

server.on('request', function (req, res) {
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname)
    console.log(query)
    if (pathname === '/tryjsonp') {
        var scriptStr = `${query.callback}({code:200, mes: '请求成功', data: {id: '001', name: '张三'}})`;
        res.end(scriptStr);
    } else {
        res.end('404');
    }
})

server.listen(3000, function () {
    console.log('server liosten at http:127.0.0.1:3000')
})