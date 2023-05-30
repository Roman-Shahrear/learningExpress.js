const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'no-store') // should be res.setHeader('content-type', 'application/json')
    res.json(products)
})


app.listen(5000, ()=> {
    console.log('server is listening on port: 5000')
})