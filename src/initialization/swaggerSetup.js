const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = require('~/docs/swagger')

const swaggerSetup = (app) => {
  const spec = swaggerJSDoc(swaggerOptions)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec))
}

module.exports = swaggerSetup
