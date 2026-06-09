const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SpaceToStudy API',
      version: '1.0.0'
    },
    servers: [{ url: '/' }]
  },
  apis: ['./src/docs/*.yaml']
}

module.exports = swaggerOptions
