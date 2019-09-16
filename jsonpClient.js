const http = require('http');
const path = require('path');
const fs = require('fs');

const app = http.createServer();
const PORT = 5500; // 服务启动端口号

app.on("request", function(req, res) {
    console.log('123')
    fs.readFile(path.join(__dirname, "jsonp.html"), function (err, data){
        if(err){
          res.write('404');
        }else{
          res.write(data);
        }
        res.end();
      });
})

/** 启动服务 **/
app.listen(PORT, () => {
    console.log("本地服务启动地址: http://localhost:%s", PORT);
});