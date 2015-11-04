// MEAN stack application test its dk work
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

// working code
// app.use(express.static(__dirname + '/public'));

// app.get('/contactlist', function (req,res){
//    console.log('I recivied get request')
//   db.contactlist.find(function (err, docs) {
//     console.log(docs);
//     res.json(docs);
//   });


// })
// working code

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

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
