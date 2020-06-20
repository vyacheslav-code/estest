const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('add', '/add')
routes.add('edit', '/edit/:id')
