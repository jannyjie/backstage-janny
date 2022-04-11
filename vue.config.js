const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
});

/*----------------jsonServer---------*/
/*引入json-server*/
const jsonServer = require('json-server')
/*搭建一个server*/
const apiServer = jsonServer.create()
/*将db.json关联到server*/
const apiRouter = jsonServer.router('mock/db.json')
const middlewares = jsonServer.defaults()
apiServer.use(middlewares)
apiServer.use(apiRouter)
/*监听端口*/
apiServer.listen(3000, () => {
console.log('JSON Server is running')
})
