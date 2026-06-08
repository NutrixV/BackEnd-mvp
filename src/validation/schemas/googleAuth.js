const googleAuthValidationSchema = {
  token: {
    type: 'object',
    required: true
  }
}

/*
 token: {
credential: 'string',
clientId: 'string',
client_id: 'string',
select_by: 'string'
}
*/

module.exports = googleAuthValidationSchema
