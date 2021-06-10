const express = require ('express')

app = express();

app.set('view engine', 'pug');
app.set('index', './views');
app.get('/', (req,res) => {
	res.render('index')
});


app.listen(3000, ()=>console.log("Server is runing at port 3000 "))