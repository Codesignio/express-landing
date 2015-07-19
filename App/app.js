var express = require('express');
var logger = require('./logger');
var app = express();


app.use(logger);
app.use(express.static('./Web'));

//var jobs = require('./routes/jobs');
app.get('/:id', function(req, res) {
	var code = req.params.id;
  res.redirect('http://old.codesign.io/'+code);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on '+port);
});