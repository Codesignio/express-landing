var express = require('express');
var requestify = require('requestify');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');


var bodyParser = require('body-parser');
var resetRoute = router.route('/reset');
resetRoute.get(function(request, response) {
    response.redirect('/');
});


var parseUrlencoded = bodyParser.json();
// =====================================================
// Get all jobs
// =====================================================

router.route('/')
    .post(parseUrlencoded, function(request, response) {
       response.json('hi');
    });
// =====================================================
// Get job info by id
// =====================================================
router.route('/:id')
    .post(parseUrlencoded, function(request, response) {
       response.json('hi1');
    });

module.exports = router;
