let http = require('http');
let fs = require('fs');
let url = require('url');
let port = process.argv[2];

if(!port){
  console.log('指定端口号不好吗？\nnode server.js 8888 这样不会吗？');
  process.exit(1);
}

let server = http.createServer(function(request, response){
  let parsedUrl = url.parse(request.url, true);
  let pathWithQuery = request.url ;
  let queryString = '';
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  let path = parsedUrl.pathname;
  let query = parsedUrl.query;
  let method = request.method;

  /********************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery);

  if(path === '/'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    let html = fs.readFileSync('src/index.html').toString();
    let page = fs.readFileSync('database/page1.json').toString();
    const array = JSON.parse(page);
    const result = array.map(item=>`<li>${item.id}</li>`).join('');
    html = html.replace('{{page}}',`<ul id="ul">${result}</ul>`);
    response.write(html);
    response.end();
  } else if(path === '/style.css'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css;charset=utf-8');
    response.write(fs.readFileSync('src/style.css'));
    response.end();
  } else if(path === '/main.js'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
    response.write(fs.readFileSync('src/main.js'));
    response.end();
  } else if(path === '/block.html'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(fs.readFileSync('src/block.html'));
    response.end();
  } else if(path === '/message.xml'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/xml;charset=utf-8');
    response.write(fs.readFileSync('src/message.xml'));
    response.end();
  } else if(path === '/data.json'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json;charset=utf-8');
    response.write(fs.readFileSync('src/data.json'));
    response.end();
  } else if(path === '/page2.json'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json;charset=utf-8');
    response.write(fs.readFileSync('database/page2.json'));
    response.end();
  } else if(path === '/page3.json'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json;charset=utf-8');
    response.write(fs.readFileSync('database/page3.json'));
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(`你输入的路径不存在对应的内容`);
    response.end();
  }

  /********************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)