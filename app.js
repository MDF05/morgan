const express = require('express')
const morgan = require('morgan')
const app = express();
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const accessLogStream = fs.createWriteStream('./public/access.log', { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
    res.json({ name: 'muhammad dava fahreza' })
})

app.get('/info', (req, res) => {
    res.json({ name: 'aulia wulandari' })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})