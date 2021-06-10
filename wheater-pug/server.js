const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const request = require('request');

require('dotenv').config();

const apiKey = process.env.API_KEY;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')
app.set('index', './views')


app.get("/", (req, res) => res.render("index"));
app.post('/', function (req, res) {
    //res.render("index")
    console.log(req.body);

    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${req.body.city}`;
    request(url, function (err, response, body) {
        //console.log(response.body);
        if(err){
            console.log('error:', error);
        } else {
            //console.log('body:', body);
            let weather = JSON.parse(body);
            let message = `It's ${weather.current.temperature} degrees in ${weather.location.name}!`;
            console.log(message);
            res.render('index', {weather: message, error: null})

					}
				});
		})
		app.listen(port, () => console.log(`Example app listening on port port!`));