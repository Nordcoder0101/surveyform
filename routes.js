const controller = require('./controller')

function routeMe(app){

    app.get('/', controller.index)
    app.post('/processform', controller.processForm)
    app.get('/result', controller.result)
}

module.exports = routeMe