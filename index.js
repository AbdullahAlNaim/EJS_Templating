const { resolveSoa } = require('dns');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))//makes the dir that index.js exists

app.get('/', (req, res) => {
    res.render('home.ejs');
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('home.ejs', { rand: num });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit.ejs', { subreddit })
})

app.listen(3000, () => {
    console.log('listening onto port 3000')
})