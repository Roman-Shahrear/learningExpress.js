const express = require('express')
const morgan = require('morgan')
const app = express()

const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')
// req => middleware => res

// 1.use vs route
// 2. options - our own / express / third party
//app.use(express.static('./public'))
//app.use([logger, authorize])

app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('items')
})

app.listen(5000, ()=> {
    console.log('server listening on port: 5000')
})