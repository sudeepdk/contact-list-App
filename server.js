// MEAN stack application test its dk work
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session      = require('express-session');

var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var uuid = require('node-uuid')
var cookieParser = require('cookie-parser');
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

//mongoose.connect('mongodb://localhost/contactlist');

//app.use(express.static(__dirname + '/public'));


// Logging middleware


//app.use(morgan()); // log every request to the console


morgan.token('id', function getId(req) {
  return req.id
})


app.use(assignId)
app.use(morgan(':id :method :url :response-time'))

 
function assignId(req, res, next) {
  req.id = uuid.v4()
  next()
}





app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// set up our express application
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./route/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

require('./config/passport')(passport); // pass passport for configuration


app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
      //  if (err){
      //     console.warn(err.message);  // returns error if no matching object found
      // }else{
      //     console.dir(doc);
      //     console.log('data saved to database');
      // }
  });
});

// to delete
app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

// edit code
app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

// updated contactlist
// app.put('/contactlist/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(req.body.name);
// });
app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number, cname: req.body.cname}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});






// oldone
// app.get('/', function (req, res) {
// 	res.send("hello from server.js");
//   console.log('I received a GET request');
// });

app.listen(5002);
console.log("server.listen(5002)");
