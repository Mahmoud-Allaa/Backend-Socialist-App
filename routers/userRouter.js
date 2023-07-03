const { Router } = require('express');
const { register, login } = require('../controllers/userController')


Router.post('/register', register)
Router.post('/login', login)

// Export Routers
module.exports = Router