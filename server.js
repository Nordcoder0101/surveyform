const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(__dirname + "/static"))
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

const routeMe = require('./routes')(app)




app.listen(8000, () => console.log('Listening on port 8000'))