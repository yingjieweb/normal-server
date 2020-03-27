## server

### 启动应用

运行 `node src/server.js 8888` 或者 `node src/server 8888`


### 添加路由

1. 编辑 server.js 文件，添加 if else
2. 重新运行 node src/server.js 8888


## 后台启动应用

touch log `node src/server.js 8888 >log log 2>&1 &`


### node热部署

安装 `npm install -g node-dev` 或者 `yarn global add node-dev`
运行 `node-dev src/server.js 8888` 或者 `node-dev src/server 8888`

