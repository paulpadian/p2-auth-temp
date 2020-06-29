//config dotenv
require('dotenv').config();
//require express and setup an express app instance
const Express = require('express')
//require and set view engine using ejs
const ejsLayouts = require('express-ejs-layouts')
//set app to use false urlencoding
//set app public directory for use
// set app ejsLayouts for render
const helmet = require('helmet')
const session = require('express-session')
const flash = require("flash");

const app = Express();
app.use(Express.urlencoded( { extended: false}));
app.use(Express.static(__dirname + "/public"));
app.set('view engine', 'ejs')
app.use(ejsLayouts);
app.use(require('morgan')('dev'))
app.use(helmet())


app.get('/', (req, res) => {
    //check for login
    console.log("you hit me")
    res.render('index');

})

app.listen(process.env.PORT , () => {
    console.log(`listening on ${process.env.PORT}`)
})