const express = require('express');
const app = express();
const multer = require('multer');
const uploads = multer({dest: 'uploads/'})



app.get('/', function(req, res) {
  res.send('Hello, world!')
});

app.post('/ala', uploads.single('whatQuestion4'), function (req, res) {
  console.log(req.file);
  console.log(req.body)
  res.send('Ala')
});


app.listen(3000, function(){
  console.log("running")
});


//next steps clean the form => use jira client