const { resolveSoa } = require('dns');
const express = require('express');
const app = express();
const path = require('path');
const port = 1234;
const mongoose = require('mongoose');
const vehicles = require('./model');

mongoose.connect('mongodb://127.0.0.1/cars');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) //makes the dir that index.js exists

app.get('/', (req, res) => {
    res.render('Apage');
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('Apage', { rand: num })
})

async function making() {
    try {
        const veh = await vehicles.create([
            {
                name: 'mach-e'
            },
            {
                name: 'lambo'
            },
            {
                name: 'mustang'
            }])

        console.log(veh, veh.length);
        return veh[0].name
    } catch (error) {
        console.log(error);
    }
}


app.get('/cars', (req, res) => {
    const cars = making();
    res.render('cars', { cars })
})




app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit.ejs', { subreddit })
})

app.listen(1234, () => {
    console.log('listening onto port 3000')
})